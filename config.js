const config = {
    appwriteProjectId : String(import.meta.env.VITE_PROJECTID),
    appwriteURL : String(import.meta.env.VITE_URL),
    appwriteDatabaseID : String(import.meta.env.VITE_DB),
    appwriteCollectionID : String(import.meta.env.VITE_COLLECTIONID),
}

export default config