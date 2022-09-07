import React from 'react';
import './App.css';
import ExampleItem from './components/ExampleItem';

function App() {
  const example = [
    { title: 'here is an amazing title'}
  ];
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src=
"https://www.emilywrites.co.nz/wp-content/uploads/2018/08/Hire-Me-1024x493.png" />
					</div>
					<li><a href="#about">About</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#blogs">Blogs</a></li>
				</ul>
			</nav>

			<section class="section">
        <ExampleItem
        title={example[0].title}></ExampleItem>
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							Header one
						</h1>
						<p class="text-small">
							Text below header
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Another Header
						</h1>
						<p class="text-small">
							another description
						</p>
					</div>
				</div>
			</section>
			
			<footer className="footer">
				<p className="text-footer">
					I made a footer
				</p>
			</footer>
		</div>
	)
}

export default App
