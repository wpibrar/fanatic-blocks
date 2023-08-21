import { useBlockProps, RichText } from '@wordpress/block-editor';


export default function save({ attributes }) {

	const blockProps = useBlockProps.save();

	console.log(attributes)

    return (
        <div { ...blockProps }>
            <h1>{attributes.heading}</h1>
            <p>{attributes.content}</p>
        </div>
    );

}
