import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	RichText 
} from '@wordpress/block-editor';
import './editor.scss';


export default function Edit({ attributes, setAttributes }) {

	// console.log(attributes);

	return (
		<div { ...useBlockProps() } style={{maxWidth: '100%'}}>
			<div className='contained'>
				<div className='contained-row align-items-center'>
					<div className='column-half'>
						<div>
							<RichText
								tagName="h1"
								value={ attributes.heading }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( content ) => setAttributes( { heading: content } ) } // Store updated content as a block attribute
								placeholder={ __( 'Heading...' ) }
							/>
							<RichText
								tagName="h2"
								value={ attributes.subheading }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( content ) => setAttributes( { subheading: content } ) } // Store updated content as a block attribute
								placeholder={ __( 'Subheading...' ) }
							/>
							<RichText
								tagName="p"
								value={ attributes.content }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( content ) => setAttributes( { content: content } ) } // Store updated content as a block attribute
								placeholder={ __( 'Text...' ) }
							/>
						</div>
					</div>
					
					<div className='column-half'>
						<div>
							<InnerBlocks
								template={[['core/image']]}
								templateLock="all"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
