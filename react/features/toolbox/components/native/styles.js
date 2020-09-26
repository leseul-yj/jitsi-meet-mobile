// @flow

import { ColorSchemeRegistry, schemeColor } from '../../../base/color-scheme';
import { BoxModel, ColorPalette } from '../../../base/styles';
import { getRGBAFormat } from '../../../base/styles/functions.any';

const BUTTON_SIZE = 66;

// Toolbox, toolbar:

/**
 * The style of toolbar buttons.
 */
const toolbarButton = {
    // backgroundColor: schemeColor('buttonToggled'),
    borderRadius: BUTTON_SIZE / 2,
    borderWidth: 0,
    flex: 0,
    flexDirection: 'row',
    height: BUTTON_SIZE,
    justifyContent: 'center',
    //borderColor: 'rgba(255, 255, 255, 0.7)',
    // XXX We probably tested BoxModel.margin and discovered it to be too small
    // for our taste.
    marginHorizontal: 7,
    width: BUTTON_SIZE
};

/**
 * The icon style of the toolbar buttons.
 */
const toolbarButtonIcon = {
    alignSelf: 'center',
    color: ColorPalette.white,
    fontSize: BUTTON_SIZE
};

/**
 * The style of toolbar buttons which display white icons.
 */
const whiteToolbarButton = {
    ...toolbarButton
    // backgroundColor: schemeColor('buttonToggled')
};

/**
 * The icon style of toolbar buttons which display white icons.
 */
const whiteToolbarButtonIcon = {
    ...toolbarButtonIcon,
    color: ColorPalette.white
};

/**
 * The Toolbox and toolbar related styles.
 */
const styles = {

    expandMenuContainer: {
        alignItems: 'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection: 'column'
    },

    sheetGestureRecognizer: {
        alignItems: 'stretch',
        flexDirection: 'column'
    },

    /**
     * The style of the toolbar.
     * 底部toolbar样式
     */
    toolbar: {
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 0,
        justifyContent: 'space-around',
        marginBottom: 38,
        //marginBottom: BoxModel.margin / 2,
        paddingHorizontal: BoxModel.margin
        // backgroundColor: '#365E83'
    },

    /**
     * The style of the root/top-level {@link Container} of {@link Toolbox}.
     */
    toolbox: {
        flexDirection: 'column',
        flexGrow: 0
    }
};

export default styles;

/**
 * Color schemed styles for the @{Toolbox} component.
 */
ColorSchemeRegistry.register('Toolbox', {
    /**
     * Styles for buttons in the toolbar.
     */
    buttonStyles: {
        iconStyle: toolbarButtonIcon,
        style: toolbarButton
    },

    buttonStylesBorderless: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...toolbarButton,
            backgroundColor: 'transparent'
        }
    },

    /**
     * Overrides to the standard styles that we apply to the chat button, as
     * that behaves slightly differently to other buttons.
     */
    chatButtonOverride: {
        toggled: {
            backgroundColor: ColorPalette.white
        }
    },
    
    // 挂断icon
    hangupButtonStyles: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...toolbarButton,
            // borderColor: '#01c384',
            // backgroundColor: '#01c384'
        },
        // underlayColor: ColorPalette.buttonUnderlay
    },

    /**
     * Styles for toggled buttons in the toolbar.
     */
    toggledButtonStyles: {
        iconStyle: whiteToolbarButtonIcon,
        style: {
            ...whiteToolbarButton,
            borderColor: schemeColor('buttonToggledBorder'),
            borderWidth: 1
        }
    }
});
