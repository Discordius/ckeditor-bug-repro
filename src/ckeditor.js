/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonBlockEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Math from './example-plugin/mathediting';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

export default class BalloonEditor extends BalloonBlockEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	Paragraph,
	Math,
	Italic
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
