import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <div
          style={{ width: "100%", margin: "auto", padding: "50px" }}
          className="bg-white text-black rounded	"
        >
          <h2 className="text-3xl text-center m-5 pb-5">
           Some Question You may Know
          </h2>
          <div>
            <h2 className="text-2xl bg-orange-200 p-5 rounded">
              what is `cors`?
            </h2>
            <p className="text-xl p-5 rounded">
              An HTTP-header based system called Cross-Origin Resource Sharing
              (CORS) enables a server to specify any origins (domain, scheme, or
              port) other than its own from which a browser should be able to
              load resources.
            </p>
          </div>
          <div>
            <h2 className="text-2xl  bg-orange-200 p-5 rounded">
              Why are you using `firebase`?
            </h2>
            <p className="text-xl p-5 rounded">If you want to develop a whole new application or completely rewrite an existing one, Firebase is an excellent option. Firebase also makes it simple to store and retrieve dynamic material. Firebase makes it simple to construct an application without writing any custom backend code.</p>
          </div>
          <div>
            <h2 className="text-2xl  bg-orange-200 p-5 rounded">
              What other options do you have to implement authentication?
            </h2>
            <p className="text-xl p-5 rounded">
              STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg,
              Authress, Auth0, Firebase, Amazon Cognito, OneLogin,
            </p>
          </div>
          <div>
            <h2 className="text-2xl  bg-orange-200 p-5 rounded">
              {" "}
              How does the private route work?
            </h2>
            <p className="text-xl p-5 rounded">Users must authenticate when using a private route. It has a child route in it that shouldn't be seen without user authentication. Users are verified on private routes. Private routes allow access to child routes if the user is genuine or registered.</p>
          </div>
          <div>
            <h2 className="text-2xl  bg-orange-200 p-5 rounded">
              What is Node? 
            </h2>
            <p className="text-xl p-5 rounded">A node is the fundamental building block of a data structure like a linked list or tree. Nodes can link to other nodes and also store data. Pointers are frequently used to implement links between nodes.</p>
          </div>
          <div>
            <h2 className="text-2xl  bg-orange-200 p-5 rounded">
               How does Node work?
            </h2>
            <p className="text-xl p-5 rounded">Node enables programmers to create JavaScript code that executes within the computer's operating system rather than a browser. Because Node has access to the operating system, file system, and everything else needed to create fully functional apps, it may be used to create server-side applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
