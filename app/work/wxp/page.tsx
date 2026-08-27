import { redirect } from "next/navigation"

/** WXP case removed — do not show a fabricated case to an interviewing company. */
export default function WxpRedirectPage() {
  redirect("/work/ui-ux")
}
