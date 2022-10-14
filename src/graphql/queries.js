import { gql } from "@apollo/client";

export const GET_BLOGS_INFO =gql `

query {
    posts {
    id
    title
    slug
    postImage {
      url
    }
    author {
      name
      avatar {
        url
      }
    }
   
  }
}

`;

export const GET_AUTHORS_INFO =gql `

query {
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}

`;
export const GET_AUTHOR_INFO =gql `

query getInfoAuthor($slug : String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    name
    fild
    discription {
      text
    }
    posts {
      id
      postImage {
        url
      }
      slug
      title
      author {
        avatar {
          url
        }
        name
      }
    }
  }
}

`;
export const GET_BLOG_INFO =gql `
query ($slug:String!) {
  post(where: {slug: $slug}) {
    id
    title
    author {
      avatar {
        url
      }
      fild
      name
    }
    postImage {
      url
    }
    content {
      text
    }
  }

}

`;


export const GET_COMMETS_POST = gql`
query getCommentsPost($slug: String!) {
  comments(where: {post: {slug:$slug}}) {
    id
    name
    text
  }
}

`