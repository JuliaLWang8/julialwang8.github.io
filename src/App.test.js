import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

test('home', () => {
  render(<Home />);
  expect(screen.getByText(/Julia L. Wang/)).toBeInTheDocument();
});

test('about', () => {
  render(<About />);
  expect(screen.getByText(/Engineering Science/)).toBeInTheDocument();
  expect(screen.getByText(/I am a/)).toBeInTheDocument();
});

test('projs', () => {
  render(<Projects />);
  expect(screen.getByText(/Covalent Reactivity/)).toBeInTheDocument();
  expect(screen.getByText(/Show More/)).toBeInTheDocument();
});

test('resume', () => {
  render(<Resume />);
  expect(screen.getByText(/Intel/)).toBeInTheDocument();
  expect(screen.getByText(/MAY 2022/)).toBeInTheDocument();

});
