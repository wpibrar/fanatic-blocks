import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText
} from '@wordpress/block-editor';
import { Button, ButtonGroup } from '@wordpress/components';
import './editor.scss';


export default function Edit({attributes, setAttributes}) {

	const addStep = () => {

		const newSteps = {
			title: '',
			des: '',
			url: '',
		}

		setAttributes({ steps: [...attributes.steps, newSteps] });
	}

	const removeStep = (indexToRemove) => {
		const newSteps = [...attributes.steps];
		newSteps.splice(indexToRemove, 1);
	  
		setAttributes({ steps: newSteps });
	}

	return (

		<div { ...useBlockProps() }>
			
			<InspectorControls key="setting" style={{paddingBottom: '25px'}}>
				<div id="gutenpride-controls" style={{paddingLeft: '15px', paddingRight: '15px', paddingBottom: '25px'}}>

					<fieldset>
						<label className="blocks-base-control__label" style={{marginBottom: '5px', display: 'block'}}>
							{ __( 'Steps Controll', 'fanatic-steps' ) }
						</label>
						<ButtonGroup>
							<Button variant="primary" onClick={addStep}>Add step +</Button>
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
								value={ attributes.description }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( content ) => setAttributes( { description: content } ) }
								placeholder={ __( 'Description...' ) }
							/>
						</div>
					</div>
				</div>
				<div className='contained-row'>
					{attributes.steps.map((stepItem, index) => (
						<div key={index} className="column-half" style={{position: 'relative'}}>
							<button
							onClick={ () => removeStep(index) }
							style={{position: 'absolute', top: 0, right: 0, paddingLeft: '5px', paddingRight: '5px'}}>-</button>
							<RichText
								tagName="h3"
								value={ stepItem.title }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( newTitle ) =>
									{
										const newSteps = [...attributes.steps];
										newSteps[index].title = newTitle;
										setAttributes( { steps: newSteps } )
									}
								}
								placeholder={ __( 'Title...' ) }
							/>
							<RichText
								tagName="p"
								value={ stepItem.des }
								allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
								onChange={ ( newDes ) =>
									{
										const newSteps = [...attributes.steps];
										newSteps[index].des = newDes;
										setAttributes( { steps: newSteps } )
									}
								}
								placeholder={ __( 'Description...' ) }
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
