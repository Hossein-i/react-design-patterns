# React Design Patterns

React design patterns are reusable solutions to common problems that developers face when building React applications. These patterns help improve code organization, maintainability, and scalability. Here are some key React design patterns:

## [01-layout-components](https://github.com/Hossein-i/react-design-patterns/tree/01-layout-components)

- **Description**: Break down the UI into smaller, reusable components and compose them together to build complex interfaces.
- **Use Case**: Building modular and reusable components.
- **Example**: Combining `Header`, `Sidebar`, and `MainContent` components to create a `Layout` component.

## [02-container-components](https://github.com/Hossein-i/react-design-patterns/tree/02-container-components)

- **Description**: Separate logic (container components) from UI (presentational components)
- **Use Case**: Improving code readability and reusability.
- **Example**: A `UserListContainer` fetches data and passes it to a `UserList` presentational component for rendering.

## [03-controlled-uncontrolled](https://github.com/Hossein-i/react-design-patterns/tree/03-controlled-uncontrolled)

- **Controlled**: Form data is handled by React state.
- **Uncontrolled**: Form data is handled by the DOM itself.
- **Use Case**: Managing form inputs and their state.

## [04-higher-order-components](https://github.com/Hossein-i/react-design-patterns/tree/04-higher-order-components)

- **Description**: A function that takes a component and returns a new component with additional props or functionality.
- **Use Case**: Sharing logic across multiple components (e.g., authentication, logging).
- **Example**: `withAuth(ProfilePage)` to add authentication logic to the `ProfilePage` component.

## [05-custom-hooks](https://github.com/Hossein-i/react-design-patterns/tree/05-custom-hooks)

- **Description**: Encapsulate reusable logic in custom hooks.
- **Use Case**: Sharing logic across multiple components.
- **Example**: A `useFetch` hook to handle API requests.

## [06-functional-programming](https://github.com/Hossein-i/react-design-patterns/tree/06-functional-programming)

### 1. Recursive Components

- **Description**: Components that render themselves recursively (e.g., for nested data structures like trees).
- **Use Case**: Rendering hierarchical data.
- **Example**:

```tsx
const TreeNode = ({ node }) => (
  <div>
    <span>{node.name}</span>
    {node.children && node.children.map((child) => (
      <TreeNode key={child.id} node={child} />
    ))}
  </div>
);
```
### 2. partiallyApply

Partial application is a functional programming technique where a function is pre-filled with some of its arguments, creating a new function that takes the remaining arguments. It allows you to specialize or customize a general function for specific use cases.

