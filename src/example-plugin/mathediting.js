/* eslint-disable no-tabs */
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

export default class MathEditing extends Plugin {
	static get pluginName() {
		return 'Math';
	}

	static get requires() {
		return [ Widget ];
	}

	static get pluginName() {
		return 'MathEditing';
	}

	init() {
		this._defineSchema();
		this._defineConverters();
	}

	_defineSchema() {
		const schema = this.editor.model.schema;

		schema.register( 'mathtex', {
			allowWhere: '$text',
			isInline: true,
			isObject: true,
		} );
	}

	_defineConverters() {
		const conversion = this.editor.conversion;

		// View -> Model
		conversion.for( 'upcast' )

			.elementToElement( {
				view: {
					name: 'span',
					classes: [ 'math-tex' ]
				},
				model: ( viewElement, { writer } ) => {
					return writer.createElement( 'mathtex');
				}
			} )

		// Model -> View (element)
		conversion.for( 'editingDowncast' )
			.elementToElement( {
				model: 'mathtex',
				view: ( modelItem, { writer } ) => writer.createRawElement( 'div', null, function( domElement ) {
					domElement.innerText = '[equation]'
					return domElement;
				} )
			} )

		// Model -> Data
		conversion.for( 'dataDowncast' )
			.elementToElement( {
				model: 'mathtex',
				view: ( modelItem, { writer } ) => writer.createContainerElement( 'span', {
					class: 'math-tex'
				} )
			} )
	}
}
