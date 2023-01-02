import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "lir6j5mc",
    dataset: "production",
    useCdn: true,
    apiVersion: new Date().toISOString().slice(0, 10)
})