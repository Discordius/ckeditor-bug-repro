/* eslint-disable no-tabs */
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

export default class MathEditing extends Plugin {
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
			isObject: true
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
					return writer.createElement( 'mathtex' );
				}
			} )

		// Model -> View (element)
		conversion.for( 'editingDowncast' )
			.elementToElement( {
				model: 'mathtex',
				view: ( modelItem, { writer } ) => {
					const widgetElement = createMathtexEditingView( modelItem, writer, false );
					return toWidget( widgetElement, writer );
				}
			} )

		// Model -> Data
		conversion.for( 'dataDowncast' )
			.elementToElement( {
				model: 'mathtex',
				view: ( modelItem, { writer } ) => writer.createContainerElement( 'span', {class: "math-tex"} )
			} )

		// Create view for editor
		function createMathtexEditingView( modelItem, writer, display ) {

			// CKEngine render multiple times if using span instead of div
			const mathtexView = writer.createContainerElement( 'span' );

			// Div is formatted as parent container
			const uiElement = writer.createRawElement( 'div', {style: "display: inline"}, function( domElement ) {
				domElement.innerHTML = "[equation]";
				// renderEquation( equation, domElement, mathConfig.engine, display, false );
				return domElement;
			} );

			writer.insert( writer.createPositionAt( mathtexView, 0 ), uiElement );

			return mathtexView;
		}
	}
}
