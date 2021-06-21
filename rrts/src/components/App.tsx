import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo, DeleteTodoAction } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  deleteTodo: (id: number) => DeleteTodoAction;
}

interface AppState {
  loading: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  state = { loading: false };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ loading: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ loading: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.props.deleteTodo(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.loading && <div>Loading ...</div>}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
