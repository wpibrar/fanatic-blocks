/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save() }>
			<div className='contained'>
				<div className='contained-row align-items-center'>
					<div className='column-full'>
						
						{ attributes.heading ? 
						<RichText.Content
							tagName="h1"
							value={ attributes.heading }
						/>
						: '' }

						{ attributes.subheading ? 
						<RichText.Content
							tagName="p"
							value={ attributes.subheading }
						/>
						: '' }

					</div>
					<div className='column-full'>
						<div className='testimonials'>
							{attributes.testimonials.map((testiItem, index) => (
								<div key={index} className="testimonial">
									
									{ testiItem.text ? 
									<RichText.Content
										tagName="p"
										value={ testiItem.text }
									/>
									: '' }

									{ testiItem.personName ? 
									<RichText.Content
										tagName="strong"
										value={ testiItem.personName }
									/>
									: '' }

									{ testiItem.country ? 
									<RichText.Content
										tagName="span"
										value={ testiItem.country }
									/>
									: '' }

								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
