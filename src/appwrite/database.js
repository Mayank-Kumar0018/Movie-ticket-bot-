import config from "../../config";
import { Client, Databases, ID } from "appwrite";

export class Database {
    client = new Client()
    database;
    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId);
        this.database = new Databases(this.client)
    }

    async createPost( ticketID ,{ number }) {
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                ticketID,
                {
                    ticketID,
                    number
                })
        } catch (error) {
            throw error
        }
    }

    async updatePost(count , gender , age , ticketID) {
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                ticketID,
                {
                    Title,
                    Content,
                    FeatureImage,
                    Status
                },

            );

        } catch (error) {
            throw error
        }
    }

    async deletePost(ticketID) {
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                ticketID,
            );

        } catch (error) {
            throw error
        }
    }

    async getPost(ticketID) {
        try {
            return await this.database.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                ticketID,
            );

        } catch (error) {
            throw error
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries,
                

            )
        } catch (error) {
            throw error

        }
    }
};

const DB = new Database();
export default DB;