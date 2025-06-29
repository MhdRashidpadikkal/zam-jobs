import React from 'react'
import ApplyForm from './components/ApplyForm'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function ApplyPage() {
  return (
    <>
      <ProtectedRoute>
        <ApplyForm />
      </ProtectedRoute>
    </>
  )
}
