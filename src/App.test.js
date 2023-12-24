import { render, screen } from '@testing-library/react';
import Home from "./components/home/home";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Projects from "./components/projects/projects";
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';   

test('home', () => {
  render(<Home />);
  mockAllIsIntersecting(true)
  expect(screen.getByText(/Julia L. Wang/)).toBeInTheDocument();
});

test('about', () => {
  render(<About />);
  mockAllIsIntersecting(true)
  expect(screen.getByText(/Engineering Science/)).toBeInTheDocument();
  expect(screen.getByText(/I am a/)).toBeInTheDocument();
});

test('projs', () => {
  render(<Projects />);
  mockAllIsIntersecting(true)
  expect(screen.getByText(/Covalent Reactivity/)).toBeInTheDocument();
  expect(screen.getByText(/Show More/)).toBeInTheDocument();
});

test('resume', () => {
  render(<Resume />);
  mockAllIsIntersecting(true)
  expect(screen.getByText(/Intel/)).toBeInTheDocument();
  expect(screen.getByText(/MAY 2022/)).toBeInTheDocument();

});
