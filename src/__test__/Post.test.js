import React from 'react';
import 'jest-localstorage-mock';
import { render, fireEvent, cleanup, within } from '@testing-library/react';
import Post from '../container/Post';
import AddPost from '../container/AddPost';
import PostItem from '../container/PostItem';
import PostDom from '../component/PostDom';
import PostItemDom from '../component/PostItemDom';

const key = 'posts';
const value = [
  {
    "id": 1,
    "user_name": "admin",
    "topic": "topic1",
    "description": "description1",
  },
  {
    "id": 2,
    "user_name": "imily",
    "topic": "topic2",
    "description": "description2",
  }
];

afterEach(cleanup);


test('Test localStorage normal', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
  global.localStorage = localStorageMock;
  render(<Post />);
  expect(localStorage.getItem).toBeCalledWith(key);
});

test('test click normal', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
  global.localStorage = localStorageMock;
  const { getByTestId } = render(<Post />);
  fireEvent.click(getByTestId('display_posts'));
  expect(localStorage.setItem).toBeCalledWith(key, JSON.stringify(value));
});

test('Test show post list', () => {
  const { container } = render(<PostDom postList={value}/>);
  const items = container.querySelectorAll('.post-main .number');
  expect(items).toHaveLength(2);
  expect(items[0].textContent).toBe(value[0].id.toString());
  expect(items[1].textContent).toBe(value[1].id.toString());
});

test('Test add post list', () => {
  const putPostToStorage = jest.fn();
  const getPosts = jest.fn();
  window.alert = jest.fn();

  const { getByText, getByTestId } = render(<AddPost postList={value} putPostToStorage={putPostToStorage} getPosts={getPosts}/>);
  const topicInput = getByTestId('topic_input');
  const userInput = getByTestId('user_input');
  const descriptionInput = getByTestId('description_input');
  fireEvent.change(topicInput, { target: { value: 'topic'}});
  fireEvent.change(userInput, { target: { value: 'user'}});
  fireEvent.change(descriptionInput, { target: { value: 'description'}});

  fireEvent.click(getByText('Submit'));
  const { container } = render(<PostDom postList={value}/>);
  const items = container.querySelectorAll('.post-main .number');
  expect(items).toHaveLength(3);

  expect(items[0].textContent).toBe(value[0].id.toString());
  expect(items[1].textContent).toBe(value[1].id.toString());
  expect(items[2].textContent).toBe("3");
});

test('Test delete post list', () => {
  const putPostToStorage = jest.fn();
  const getPosts = jest.fn();
  const { container, queryAllByTestId } = render(<PostDom postList={value} putPostToStorage={putPostToStorage} getPosts={getPosts}/>);
  const firstDeleteBtn = queryAllByTestId('delete_post')[0];
  fireEvent.click(firstDeleteBtn);

  const items = container.querySelectorAll('.post-main .number');
  // expect(items).toHaveLength(2);
});


test('Test edit post list', () => {
  const putPostToStorage = jest.fn();
  const getPosts = jest.fn();
  const { getByText, getByTestId } =
    render(
      <PostItem
        item={value[0]}
        postList={value}
        putPostToStorage={putPostToStorage}
        getPosts={getPosts}
      />);
  const input = getByTestId('topic_input');
  fireEvent.change(input, { target: { value: 'bbbb'}});
  expect(input.value).toBe('bbbb');
  expect(getByTestId('display_topic').innerHTML).toBe('topic1');

  fireEvent.click(getByText('OK'));
  expect(getByTestId('display_topic').innerHTML).toBe('bbbb');
});
