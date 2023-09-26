import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Markdowns = () => {
	const [markdownText, setMarkdownText] = useState('# sup');

	const handleMarkdownChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setMarkdownText(e.target.value);
	};

	return (
		<div>
			<h2>Markdown Editor</h2>
			<textarea
				className="w-96 h-96"
				value={markdownText}
				onChange={handleMarkdownChange}
				placeholder="Enter Markdown Text Here"
				cols={50}
			/>

			<h2>Markdown Preview</h2>
			<div className="markdowns w-96  whitespace-break-spaces">
				<ReactMarkdown
					className="markdowns w-96  whitespace-break-spaces"
					components={{
						code({ node, inline, className, children, ...props }) {
							const match = /language-(\w+)/.exec(
								className || '',
							);
							return !inline && match ? (
								<SyntaxHighlighter
									{...props}
									children={String(children).replace(
										/\n$/,
										'',
									)}
									style={undefined}
									language={match[1]}
									PreTag="div"
								/>
							) : (
								<code {...props} className={className}>
									{children}
								</code>
							);
						},
					}}
				>
					{markdownText}
				</ReactMarkdown>
			</div>
		</div>
	);
};

export default Markdowns;
