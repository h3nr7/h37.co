


export default async function TwelveDaysOfXmasSlug({
  params
}: {
  params: Promise<{slug: string}>
}) {
  const slug = (await params).slug
  const data = await fetch('https://api.vercel.app/blog')
  const out = (await data.json()) as  Record<string, any>[]


  return (
    <>12 days {slug} {out.map((e, i) => <div key={i}>{e.id}</div>)}</>
  )
}