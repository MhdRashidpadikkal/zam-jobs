import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!supabaseAdmin.auth) {
      return NextResponse.json(
        { error: 'Supabase admin client not properly initialized' },
        { status: 500 }
      );
    }

    try {
      const { data, error } = await supabaseAdmin.auth.admin.listUsers();
      
      if (error) {
        console.error('Error listing users:', {
          error: error.message,
          code: error.code,
          status: error.status
        });
        
        return NextResponse.json(
          { 
            error: 'Failed to list users',
            details: {
              code: error.code,
              message: error.message,
              status: error.status
            }
          },
          { status: 500 }
        );
      }

      if (!data?.users) {
        return NextResponse.json(
          { exists: false },
          { status: 404 }
        );
      }

      const user = data.users.find((u: any) => u.email === email);

      if (!user) {
        return NextResponse.json({ exists: false });
      }

      const isEmailPassword = user.identities?.some((i: any) => i.provider === 'email');
      return NextResponse.json({ exists: true, isEmailPassword });
    } catch (error: any) {
      console.error('Network error:', {
        message: error.message,
        cause: error.cause,
        code: error.code
      });
      
      return NextResponse.json(
        { 
          error: 'Network connection failed',
          details: {
            message: error.message,
            code: error.code,
            cause: error.cause
          }
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in check-auth-method:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
