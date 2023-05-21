import React from "react";

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Page</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Question 1:</h2>
        <p>
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </p>
        <p>
          Answer: An access token is a credential that is used to authenticate
          and authorize a client to access protected resources. It is typically
          a short-lived token issued by the server upon successful
          authentication. On the other hand, a refresh token is a long-lived
          token used to obtain a new access token when the current one expires.
          It helps maintain the user's session and prevents the need for
          frequent reauthentication.
        </p>
        <p>
          Access tokens are usually stored in the client-side browser's memory
          or local storage, as they need to be sent with each API request to
          authenticate the user. However, it's important to note that storing
          sensitive tokens in local storage poses security risks. Refresh tokens
          should be securely stored in an HTTP-only cookie to mitigate potential
          security vulnerabilities.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Question 2:</h2>
        <p>Compare SQL and NoSQL databases?</p>
        <p>
          Answer: SQL (Structured Query Language) databases are relational
          databases that store data in tables with predefined schemas. They use
          a structured data model and follow ACID (Atomicity, Consistency,
          Isolation, Durability) properties. SQL databases are suitable for
          applications with complex relationships between entities and where
          data integrity is crucial.
        </p>
        <p>
          On the other hand, NoSQL (Not Only SQL) databases are non-relational
          databases that provide flexibility in data modeling. They can handle
          unstructured, semi-structured, and structured data. NoSQL databases
          are horizontally scalable and often used in applications requiring
          high scalability and performance. They offer different data models
          like key-value, document, columnar, and graph databases.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Question 3:</h2>
        <p>What is Express.js? What is Nest.js?</p>
        <p>
          Answer: Express.js is a popular Node.js web application framework that
          simplifies the creation of server-side applications. It provides a
          minimalist and flexible approach to building web servers and APIs.
          Express.js allows developers to handle routes, middleware, and other
          functionalities required for web application development easily.
        </p>
        <p>
          Nest.js is a progressive Node.js framework for building efficient,
          scalable, and maintainable server-side applications. It leverages
          TypeScript and follows a modular architecture inspired by Angular.
          Nest.js provides built-in support for features like dependency
          injection, decorators, and a powerful CLI. It promotes code
          reusability, testability, and structured application development.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Question 4:</h2>
        <p>What is MongoDB aggregate and how does it work?</p>
        <p>
          Answer: MongoDB's aggregate is a powerful aggregation framework that
          allows for advanced data processing and analysis. It provides a way to
          perform complex operations on the data stored in MongoDB collections.
          The aggregate framework utilizes a pipeline concept where multiple
          stages are applied sequentially to transform the input documents and
          produce the desired result.
        </p>
        <p>
          Each stage in the pipeline performs specific operations such as
          filtering, sorting, grouping, projecting, and performing calculations.
          The output of one stage becomes the input for the next stage. The
          aggregate pipeline can include various stages and operators to
          manipulate and reshape the data. It offers powerful aggregation
          capabilities, including grouping, counting, summing, averaging,
          joining, and more.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
