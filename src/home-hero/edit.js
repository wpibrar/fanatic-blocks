import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaUpload 
} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {

	const blockProps = useBlockProps();

	// console.log(attributes)


	return (
		<div { ...blockProps }>
			<div className='home-cover'>
				<div>
					<RichText
						tagName="h1" // The tag here is the element output and editable in the admin
						value={ attributes.heading } // Any existing content, either from the database or an attribute default
						allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( value ) => setAttributes( { heading: value } ) } // Store updated content as a block attribute
						placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
					/>
					<RichText
						tagName="p" // The tag here is the element output and editable in the admin
						value={ attributes.content } // Any existing content, either from the database or an attribute default
						allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ ( value ) => setAttributes( { content: value } ) } // Store updated content as a block attribute
						placeholder={ __( 'Text content here...' ) } // Display this text before any content has been added by the user
					/>
				</div>
				<div>
					<MediaUpload
						onSelect={(media) => {
							console.log(media)
							// setAttributes({ image: media.url })
						}}
						type="image"
						value={attributes.image}
						render={({ open }) => (
							<button onClick={open}>Select Background Image</button>
						)}
					/>
				</div>



			</div>
		</div>
	);
}
