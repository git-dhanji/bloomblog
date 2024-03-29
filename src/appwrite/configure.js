import config from "../config/config";
import { Client, Storage, Databases, ID, Query } from "appwrite";

export class Service {
  client = new Client();
  bucket;
  databases;

  // constructor function excute when service is call
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.bucket = new Storage(this.client);
    this.databases = new Databases(this.client);
  }

  // create post -->  needs (title,description,image,author,etc...)
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId, //connect to db
        config.appwriteCollectionId, // then connect to collection
        slug, //unique for all post
        {
          // all create post data
          title,
          content,
          featuredImage, // featured image not type is image : pass a featured image identifier
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite service :: createPost :: error :: ", error);
    }
  }

  // Update Post --> param1: slug:unique identifier  param2:upadate content {};
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("appwrite service :: updatePost :: error :: ", error);
    }
  }
  // Delete Post pass a parameter slug : for identify which post u want to be deleted
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;   // { Post deleted successfully return true }
    } catch (error) {
      console.log("appwrite service :: deletePost :: error :: ", error);
      return false;
    }
  }

 // Get post return your single post 
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite service :: getPost :: error :: ", error);
    }
  }

  //return all post collection : pass a query as parameter 
  async getPostCollection(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments( 
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite service :: getPostCollection :: error :: ", error);
      return false;
    }
  }


  //upload file : upload a file (image) and save on bucket id.unique : for match in featuredImage
  async uploadFile(file) {
    try {
      await this.bucket.createFile(config.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log("appwrite service :: uploadFile :: error :: ", error);
      return false;
    }
  }
// Delete file : deleteFile( <-- fileID , pass as paraMeter for which item delete-->)
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("appwrite service :: deleteFile :: error :: ", error);
      return false;
    }
  }

  // getFilePreview : get file preview 
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
