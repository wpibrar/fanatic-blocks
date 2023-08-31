import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';


export default function save({attributes}) {
	return (
		<div { ...useBlockProps.save() }>
			<div className='contained'>
				<div className='contained-row align-items-center'>
					<div className='column-half'>
						<div>
							<RichText.Content
								tagName="h1"
								value={ attributes.heading }
							/>
							<RichText.Content
								tagName="h2"
								value={ attributes.subheading }
							/>
							<RichText.Content
								tagName="p"
								value={ attributes.content }	
							/>
						</div>
					</div>
					<div className='column-half'>
						<div>
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
