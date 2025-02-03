import Notion, {NotionQuery} from '@wanner.work/notion'

export const revalidate = 60

export default async function Home() {
  const query = new NotionQuery(process.env.NOTION_SECRET!)
  const data = await query.execute('18ffd86de1ea80dc95fadd249501495f')

  return (
    <div>
      revalidiert maximal alle 60 sekunden sobald die Seite aufgerufen wird
      <Notion custom={[
        {
          type: 'unsupported',
          component: ({block}) => <></>
        }
      ]} data={data}/>
    </div>
  )
}
