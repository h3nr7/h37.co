


export default async function TwelveDaysOfXmasSlug({
  params
}: {
  params: Promise<{day: string}>
}) {
  const slug = (await params).day
  const data = await fetch('https://api.vercel.app/blog')
  const out = (await data.json()) as  Record<string, any>[]


  return (
    <>12 days {slug} {out.map((e, i) => <div key={i}>{e.id}</div>)}</>
  )
}