import { NextResponse } from 'next/server'

import { supabase } from '@/lib/db/supabase'

export async function POST(
  request: Request
) {
  try {
    const body = await request.json()

    const {
      email,
    } = body

    const { data: existingUser } =
      await supabase
        .from('giveaway_entries')
        .select('id')
        .eq('email', email)
        .maybeSingle()

    if (existingUser) {
      return NextResponse.json(
        {
          message:
            'You have already entered this giveaway',
        },
        {
          status: 409,
        }
      )
    }

    const { error } =
      await supabase
        .from('giveaway_entries')
        .insert([
          {
            first_name:
              body.firstName,

            last_name:
              body.lastName,

            instagram_handle:
              body.instagramHandle,

            email: body.email,

            phone: body.phone,

            pain_area:
              body.painArea,

            pain_area_other:
              body.painAreaOther,

            why_not_yet:
              body.whyNotYet,

            interest_level:
              body.interestLevel,
          },
        ])

    if (error) {
      return NextResponse.json(
        {
          message:
            'Failed to submit giveaway entry',
        },
        {
          status: 400,
        }
      )
    }

    return NextResponse.json(
      {
        message:
          'Entry submitted successfully',
      },
      {
        status: 201,
      }
    )
  } catch {
    return NextResponse.json(
      {
        message:
          'Internal server error',
      },
      {
        status: 500,
      }
    )
  }
}