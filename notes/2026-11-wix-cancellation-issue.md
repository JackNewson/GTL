# Wix cancellation not reaching the new booking system

**Reported:** November 2026
**Status:** Handled manually: the client was removed from the new system by hand.

## What happened

A client cancelled a class through the old Wix site. The cancellation was recorded in Wix
but never reached the new booking system (Squarespace Scheduling / Acuity), so they still
showed as booked there.

## Why

Wix and the new booking system are separate calendars and share nothing. Clients who booked
before the switch still have Wix confirmation emails with Wix cancel links. Cancelling with
one of those links only updates Wix.

This will keep happening for any Wix-era booking until those classes have passed.

## What to do

1. **Short term:** check Wix for cancellations every day or two and remove those clients
   from the new system.
2. **Email clients with Wix-era bookings:** tell them bookings have moved and give them the
   new cancel/reschedule link (or ask them to reply by email).
3. **After the last Wix-era class:** turn off Wix bookings or close the Wix site, and point
   the domain at the new site.
4. **Check client self-cancellation in the new system:** in Squarespace Scheduling, allow
   clients to cancel/reschedule and set a cutoff (for example 24 hours before).

## Website code

No code change was needed: the site in `groundtreatmentrooms/` has no booking logic.

Still to do: every "Book" button in `groundtreatmentrooms/index.html` points to the placeholder
`YOUR_SQUARESPACE_BOOKING_URL`. Replace it with the real booking page URL.
