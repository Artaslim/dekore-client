import React from "react";

const Blog = () => {
  return (
    <>
      <div className=" rounded-2xl border-4 border-teal-700   p-6 mb-6">
        <h4 className="text-3xl font-semibold">
          What are the different ways to manage a state in a React application?
        </h4>
        <p className="text-2xl p-4 w-75 font-medium">
          <small>
            There are different ways to manage state in a react application.
            Some of them are mentioned below: Using URL to store some data. For
            example: The id of the current item being viewed, Filter parameters,
            Pagination offset and limit, Sorting data Storing the state in the
            browser via web storage. This is useful when we want to persist
            state between reloads and reboots. Examples include cookies, local
            storage, and IndexedDB. These are native browser technologies. Using
            store state locally. It is useful when one component needs the
            state. Examples include a toggle button, a form, etc. Defining the
            state in the parent component. Often, the same state is used across
            multiple components. In those cases, it is useful to lift the state
            to a common parent. The lifting state is a two‑step process. First,
            we declare the state in a common parent component, and then we pass
            the state down to child components via props. This pattern should be
            considered any time a few related components need to use the same
            state. The lifting state avoids duplicating states in multiple
            components. It helps to assure that our components all consistently
            reflect the same state. Computing the new state based on the
            available state and we do not need to declare a state at all. If
            there are existing values that can be composed to give us the
            information we need, then we can calculate that information on each
            render instead of storing it. Some examples include calling .length
            on an array to determine the number of records instead of storing a
            separate numItems variable in the state or deriving an errorsExist
            boolean by checking if the errors array is empty.
          </small>
        </p>
      </div>
      <div className=" rounded-2xl border-4 border-teal-700   p-4 mb-6">
        <h4 className="text-3xl font-semibold">
          What is a unit test? Why should we write unit tests?
        </h4>
        <p className="text-2xl p-4 w-75 font-medium">
          <small>
            Unit testing is a type of software testing where individual units or
            software components are tested. Its purpose is to validate that each
            unit of code performs as expected. A unit can be anything you want
            it to be — a line of code, a method, or a class. Generally, smaller
            tests are better as they give a more granular view of your code’s
            performance. Also, when you test very small units, your tests can
            run fast, like a thousand tests in a second fast. Unit tests save
            time and money. Usually, we tend to test the happy path more than
            the unhappy path. If you release such an app without thorough
            testing, you would have to keep fixing issues raised by your
            potential users. The time to fix these issues could’ve been used to
            build new features or optimize the existing system. Bear in mind
            that fixing bugs without running tests could also introduce new bugs
            into the system. Well-written unit tests act as documentation for
            your code. Any developer can quickly look at your tests and know the
            purpose of your functions. It simplifies the debugging process Unit
            testing is an integral part of extreme programming. Extreme
            programming is basically a “test-everything-that-can-possibly-break”
            programming strategy. Unit tests make code reuse easier. If you want
            to reuse existing code in a new project, you can simply migrate both
            the code and tests to your new project, then run your tests to make
            sure you have the desired results. Unit testing improves code
            coverage. A debatable topic is to have 100% code coverage across
            your application. In the testing pyramid, unit tests are faster than
            integration and end-to-end. They are more assertive and return quick
            feedback.
          </small>
        </p>
      </div>
      <div className=" rounded-2xl border-4 border-teal-700   p-4 mb-6">
        <h4 className="text-3xl font-semibold">
          Differences between Angular.js, React.js and Vue.js
        </h4>
        <p className="text-2xl p-4 w-75 font-medium">
          <small>
            <strong>Architecture </strong>
            <br />
            Speaking of architecture, Angular.js is a full-fledged MVC framework
            that provides you with all the possibilities for out-of-the-box
            programming: Templates based on HTML; Dependency injection; Ajax
            requests; Routing; Encapsulation of CSS components; Components
            testing utilities; Opportunities to create forms, etc. React.js, on
            the other hand, is a library that just offers the view, leaving the
            developer to decide how to construct the Model and Controller. The
            following features are provided: As an add-on to JavaScript, the JSX
            language, which is similar to XML, is used instead of templates; No
            introduction of dependencies; Ajax requests; Vue.js is a library
            that allows you to create interactive web interfaces. Vue.js is
            primarily concerned with the ViewModel layer of the MVVM
            architecture. It uses two-way data bindings to attach the View and
            the Model. Directives and Filters abstract away the actual DOM
            operations and output formatting. <strong>Data Binding</strong>{" "}
            <br /> Angular.js uses the two-way binding. The state of the model
            is changed first, and then the modification of the interface element
            is reflected. The interface element changes as the model’s state
            changes, which is why two-way data binding is used. React.js has
            one-way binding. First, the state of the model is updated, and then
            it reflects the change of the interface element. If you change the
            interface element, the state of the model stays the same. As on
            Angular, the data binding on Vue.js is two-way. Vue.js synchronizes
            the entire model with the DOM mechanically. This implies that all
            Vue.js templates are fundamentally legal, parsable HTML with a few
            extra features. Remember this because Vue templates are
            fundamentally different from string-based templates.{" "}
            <strong>Mobile solutions</strong>
            <br /> Each one of the three compared web development frameworks
            offers mobile solutions for apps development. When it comes to
            Angular, this is the Ionic framework, which makes use of Angular’s
            Cordova container. You download the app, which is a web application
            running within a web browser. React.js doesn’t have a similar
            framework. React Native is a platform for creating actual native
            mobile applications. Vue has announced its support for the Alibaba
            Group’s Weex project, which is a cross-platform UI framework.
          </small>
        </p>
      </div>
      <div className=" rounded-2xl border-4 border-teal-700   p-4 mb-6">
        <h4 className="text-3xl font-semibold">
          How does prototypical inheritance work?
        </h4>
        <p className="text-2xl p-4 w-75 font-medium">
          <small>
            Everything in Javascript is an object. Even when creating a Class is
            an Object via an Object Literal or Constructor Function. This is how
            Javascript does class-based programming as to other traditional
            Object-Oriented Programming languages where they use the keyword
            ‘class’ and ‘inheritance’. So, the core idea of Prototypal
            Inheritance is that an object can point to another object and
            inherit all its properties. The main purpose is to allow multiple
            instances of an object to share common properties, hence, the
            Singleton Pattern.
          </small>
        </p>
      </div>
    </>
  );
};

export default Blog;
