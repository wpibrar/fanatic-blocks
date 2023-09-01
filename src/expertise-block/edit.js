import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText
} from '@wordpress/block-editor';
import { Button, ButtonGroup } from '@wordpress/components';
import './editor.scss';


export default function Edit({attributes, setAttributes}) {

	const addExpertise = () => {

		const newExpertise = {
			title: '',
			des: '',
			url: '',
		}

		setAttributes({ expertise: [...attributes.expertise, newExpertise] });
	}

	const removeExpertise = (indexToRemove) => {
		const newExpertise = [...attributes.expertise];
		newExpertise.splice(indexToRemove, 1);
	  
		setAttributes({ expertise: newExpertise });
	}

	return (

		<div { ...useBlockProps() }>
			
			<InspectorControls key="setting">
				<div id="gutenpride-controls" style={{paddingLeft: '15px', paddingRight: '15px'}}>

					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Expertise Controll', 'expertise-block' ) }
						</legend>
						<ButtonGroup>
							<Button variant="primary" onClick={addExpertise}>Add Expertise +</Button>
							<Button variant="primary">Less Expertise -</Button>
						</ButtonGroup>
					</fieldset>
				</div>
			</InspectorControls>

			<div className='contained'>
				<div className='contained-row align-items-center'>
					{attributes.expertise.map((expertiseItem, index) => (
						<div key={index} className="column-half" style={{position: 'relative'}}>
							<button
							onClick={ () => removeExpertise(index) }
							style={{position: 'absolute', top: 0, right: 0}}>-</button>
							<RichText
								tagName="h3"
								value={ expertiseItem.title }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( newTitle ) =>
									{
										const newExpertise = [...attributes.expertise];
										newExpertise[index].title = newTitle;
										setAttributes( { expertise: newExpertise } )
									}
								}
								placeholder={ __( 'Title...' ) }
							/>
							<RichText
								tagName="p"
								value={ expertiseItem.des }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( newDes ) =>
									{
										const newExpertise = [...attributes.expertise];
										newExpertise[index].des = newDes;
										setAttributes( { expertise: newExpertise } )
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
