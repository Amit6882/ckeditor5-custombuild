import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import maximizeIcon from '../../theme/icons/maximize.svg';
import MaximizeCommand from './MaximizeCommand';

const MAXIMIZE = 'maximize';


export default class MaximizeUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {

		console.log( 'MaximizeUI was initialized' );

		const editor = this.editor;
		const t = editor.t;

		
	

		

		editor.ui.componentFactory.add( MAXIMIZE, locale => {
			const view = new ButtonView( locale );

			
		// Create Maximize command.
		editor.commands.add( MAXIMIZE, new MaximizeCommand(editor,view) );

		// Set the Ctrl+M keystroke.
		editor.keystrokes.set( 'CTRL+M', MAXIMIZE );

		
			const command = editor.commands.get( MAXIMIZE );
            	
            view.set( {
                label: t( 'Maximize' ),
				icon: maximizeIcon,
				keystroke: 'CTRL+M',
				tooltip: true
			} );
			
			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );
			// Execute command.
			this.listenTo( view, 'execute', () => editor.execute(MAXIMIZE) );

			return view;
		} );
		
	}
}
