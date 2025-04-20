import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function TripsPage() {
    const client = await createClient();
    const pages = await client.getAllByType("trip");
    console.log({ pages })

    return <main className="container px-4 mx-auto">
        <ul className="">
            {pages.map(page => {
                return <li key={page.id}>
                    <PrismicNextLink href={'/trip/'+page.uid} className="">
                        {page.data.meta_title}
                    </PrismicNextLink>
                </li>
            })}
        </ul>
    </main>
}