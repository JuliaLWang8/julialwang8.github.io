import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

test('nav', () => {
  render(<Navbar />);
  expect(screen.getByText(/Julia L. Wang/)).toBeInTheDocument();
  expect(screen.getByText(/ABOUT/)).toBeInTheDocument();
  expect(screen.getByText(/PROJECTS/)).toBeInTheDocument();
  expect(screen.getByText(/RESUME/)).toBeInTheDocument();
  expect(screen.getByText(/CONTACT/)).toBeInTheDocument();
});

test('home', () => {
  render(<Home />);
  expect(screen.getByText(/Hello!/)).toBeInTheDocument();
  expect(screen.getByText(/JULIA L. WANG/)).toBeInTheDocument();
});

test('about', () => {
  render(<About />);
  expect(screen.getByText(/ABOUT/)).toBeInTheDocument();
  expect(screen.getByText(/ML and AI Engineering/)).toBeInTheDocument();
  expect(screen.getByText(/I am a/)).toBeInTheDocument();
});

test('projs', () => {
  render(<Projects />);
  expect(screen.getByText(/PROJECTS/)).toBeInTheDocument();
  expect(screen.getByText(/Show More/)).toBeInTheDocument();
});

test('resume', () => {
  render(<Resume />);
  expect(screen.getByText(/RESUME/)).toBeInTheDocument();
  expect(screen.getByText(/EXPERIENCE/)).toBeInTheDocument();
  expect(screen.getByText(/Education/)).toBeInTheDocument();
  expect(screen.getByText(/Skills/)).toBeInTheDocument();
  expect(screen.getByText(/Awards/)).toBeInTheDocument();
});

test('contact', () => {
  render(<Contact />);
  expect(screen.getByText(/CONTACT/)).toBeInTheDocument();
  expect(screen.getByText(/julialong.wang/)).toBeInTheDocument();
  expect(screen.getByText(/LinkedIn/)).toBeInTheDocument();
});