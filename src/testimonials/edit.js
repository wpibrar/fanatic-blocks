import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText
} from '@wordpress/block-editor';
import { Button, ButtonGroup } from '@wordpress/components';
import './editor.scss';


export default function Edit({attributes, setAttributes}) {

	const addTesti = () => {

		const newTestis = {
			text: '',
			personName: '',
			country: '',
		}

		setAttributes({ testimonials: [...attributes.testimonials, newTestis] });
	}

	const removeTesti = (indexToRemove) => {
		const newTestis = [...attributes.testimonials];
		newTestis.splice(indexToRemove, 1);
	  
		setAttributes({ testimonials: newTestis });
	}

	return (

		<div { ...useBlockProps() }>
			
			<InspectorControls key="setting" style={{paddingBottom: '25px'}}>
				<div id="gutenpride-controls" style={{paddingLeft: '15px', paddingRight: '15px', paddingBottom: '25px'}}>

					<fieldset>
						<label className="blocks-base-control__label" style={{marginBottom: '5px', display: 'block'}}>
							{ __( 'Testimonials Controll', 'testimonials' ) }
						</label>
						<ButtonGroup>
							<Button variant="primary" onClick={addTesti}>Add Testimonial +</Button>
						</ButtonGroup>
					</fieldset>
				</div>
			</InspectorControls>

			<div className='contained'>
				<div className='contained-row'>
					<div className="column-full">
						<div>
							<RichText
								tagName="h2"
								value={ attributes.heading }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( content ) => setAttributes( { heading: content } ) }
								placeholder={ __( 'Heading...' ) }
							/>
							<RichText
								tagName="p"
								value={ attributes.text }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( content ) => setAttributes( { text: content } ) }
								placeholder={ __( 'Text...' ) }
							/>
						</div>
					</div>
				</div>
				<div className='contained-row'>
					{attributes.testimonials.map((testiItem, index) => (
						<div key={index} className="column-full" style={{position: 'relative', borderBottom: '1px solid gray'}}>
							<button
							onClick={ () => removeTesti(index) }
							style={{position: 'absolute', top: 0, right: 0, paddingLeft: '5px', paddingRight: '5px'}}>-</button>
							<RichText
								tagName="p"
								value={ testiItem.text }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( newText ) =>
									{
										const newTestis = [...attributes.testimonials];
										newTestis[index].text = newText;
										setAttributes( { testimonials: newTestis } )
									}
								}
								placeholder={ __( 'Text...' ) }
							/>
							<RichText
								tagName="strong"
								value={ testiItem.personName }
								allowedFormats={[]}
								onChange={ ( newPersonName ) =>
									{
										const newTestis = [...attributes.testimonials];
										newTestis[index].personName = newPersonName;
										setAttributes( { testimonials: newTestis } )
									}
								}
								placeholder={ __( 'Person Name...' ) }
								style={{display: 'block'}}
							/>
							<RichText
								tagName="span"
								value={ testiItem.country }
								allowedFormats={[]}
								onChange={ ( country ) =>
									{
										const newTestis = [...attributes.testimonials];
										newTestis[index].country = country;
										setAttributes( { testimonials: newTestis } )
									}
								}
								placeholder={ __( 'Country...' ) }
								style={{display: 'block'}}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
