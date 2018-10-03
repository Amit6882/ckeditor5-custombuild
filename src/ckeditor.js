/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Maximize from './ckeditor5-toolbars/src/maximize';
import Resize from './ckeditor5-toolbars/src/resize'
import Drive from './ckeditor5-toolbars/src/drive';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Paragraph,
	Maximize,
	Resize,
	Drive
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'maximize',
			'drive'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
