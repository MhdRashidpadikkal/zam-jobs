import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { NextRequest, NextResponse } from 'next/server';
import { User, UserIdentity } from '@supabase/supabase-js'; // Import User and UserIdentity types

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
      // Use the ListUsersResponse type from Supabase for better type safety
      // Although Supabase client doesn't directly export ListUsersResponse,
      // we can infer it or define a minimal interface.
      // For now, let's use a more specific type for `data` that includes `users`.
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

      // Ensure data.users exists and is an array
      if (!data?.users || !Array.isArray(data.users)) {
        // It's better to return 200 with exists: false if no users are found,
        // rather than 404, as the request to check exists succeeded.
        return NextResponse.json(
          { exists: false, message: 'No users found in the database.' },
          { status: 200 }
        );
      }

      // Find the user by email, ensuring `u` is typed as `User`
      const user = data.users.find((u: User) => u.email === email);

      if (!user) {
        return NextResponse.json({ exists: false });
      }

      // Check if any identity has 'email' provider, ensuring `i` is typed as `UserIdentity`
      const isEmailPassword = user.identities?.some((i: UserIdentity) => i.provider === 'email');

      return NextResponse.json({ exists: true, isEmailPassword, provider: isEmailPassword ? 'email' : (user.identities && user.identities.length > 0 ? user.identities[0].provider : 'unknown') });
    } catch (error: unknown) { // Catching unknown for general errors
      console.error('Network error or unexpected error during user listing:', error);

      let errorMessage = 'An unknown network error occurred.';
      let errorCode = 'UNKNOWN_ERROR';
      let errorCause;

      if (error instanceof Error) {
        errorMessage = error.message;
        const errorObj = error as unknown as Record<string, unknown>;
        errorCode = (typeof errorObj.code === 'string') ? errorObj.code : 'GENERIC_ERROR'; // no 'any'
        errorCause = error.cause;
      }
      

      return NextResponse.json(
        {
          error: 'Network connection failed or unexpected server error',
          details: {
            message: errorMessage,
            code: errorCode,
            cause: errorCause
          }
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) { // Catching unknown for general errors in the outer try-catch
    console.error('Error in check-auth-method:', error);

    let errorMessage = 'Internal server error.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}