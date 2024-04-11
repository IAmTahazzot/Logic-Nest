import { google } from 'googleapis'
import { clerkClient, currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET() {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.OAUTH2_REDIRECT_URI
  )

  const user = await currentUser()

  if (!user) {
    return NextResponse.json(
      { error: 'You must be signed in' },
      { status: 401 }
    )
  }

  console.log('getting token')
  const tokens = await clerkClient.users.getUserOauthAccessToken(
    user.id,
    'oauth_google'
  )
console.log(tokens)
  auth.setCredentials({
    access_token: tokens[0].token,
  })

  const drive = google.drive({ version: 'v3', auth: auth })

  try {
    const response = await drive.files.list()

    if (response) {
      return Response.json(
        {
          message: response.data,
        },
        {
          status: 200,
        }
      )
    } else {
      return Response.json(
        {
          message: 'No files found',
        },
        {
          status: 200,
        }
      )
    }
  } catch (error) {
    return Response.json(
      {
        message: 'Something went wrong',
      },
      {
        status: 500,
      }
    )
  }
}
