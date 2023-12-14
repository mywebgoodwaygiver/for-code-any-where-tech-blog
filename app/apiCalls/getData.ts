import { collection } from "../mongodb/db";
import { Document } from "mongodb";

async function mapDocumentToMeta(document: Document): Promise<Meta> {
  return {
    id: document._id.toString(),
    title: document.title,
    date: document.date,
    tags: document.tags,
    image: document.thumbnail,
    link: document.link,
    description: document.description,
    modified: document.dateupdated,
    // readTime: document.readTime,
    // Map other properties as needed
  };
}
export const getPostsMeta2 = async ():Promise<Meta[]> =>{
  // Ensure that 'collection' is defined
  if (!collection) {
    // Handle the case where 'collection' is not yet defined
    throw new Error("MongoDB collection is not available");
  }

  try {
    // Query to retrieve data (you can modify this query as needed)
    const query = {};
    const projection = {
      _id: 1,
      title: 1,
      date: 1,
      tags: 1,
      thumbnail: 1,
      link: 1,
      description: 1,
      dateupdated: 1,
      //   readTime: 1,
    };

    const documents: Document[] = await collection
      .find(query)
      .project(projection)
      .toArray();

    // Map each Document to a Promise<Meta> object
    const result: Promise<Meta>[] = documents.map(mapDocumentToMeta);

    // Wait for all promises to resolve
    return Promise.all(result);
  } catch (error) {
    // Handle any errors that occur during the data retrieval
    console.error("Error retrieving data:", error);
    throw error; // Propagate the error to the calling code
  }
}
