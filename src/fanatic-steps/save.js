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
				<div className='contained-row'>
					<div className="column-full">
						<div>
							<RichText.Content
								tagName="h2"
								value={ attributes.heading }
								className="section-heading"
							/>
							<RichText.Content
								tagName="p"
								value={ attributes.description }
							/>
						</div>
					</div>
				</div>
				<div className='contained-row'>
					{attributes.steps.map((stepItem, index) => (
						<div key={index} className="column-half">
							<div>
								<RichText.Content
									tagName="h3"
									value={ stepItem.title }
								/>
								<RichText.Content
									tagName="p"
									value={ stepItem.des }
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
