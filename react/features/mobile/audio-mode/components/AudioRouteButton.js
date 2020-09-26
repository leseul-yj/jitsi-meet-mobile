// @flow
import { NativeModules } from 'react-native';
import { openDialog } from '../../../base/dialog';
import { translate } from '../../../base/i18n';
import { IconAudioRoute , IconSpeakerLight} from '../../../base/icons';
import { connect } from '../../../base/redux';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';

import AudioRoutePickerDialog from './AudioRoutePickerDialog';
import styles from './styles';
const { AudioMode } = NativeModules;

type Props = AbstractButtonProps & {

    /**
     * The redux {@code dispatch} function used to open/show the
     * {@code AudioRoutePickerDialog}.
     */
    dispatch: Function
};

/**
 * A toolbar button which triggers an audio route picker when pressed.
 */
class AudioRouteButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.audioRoute';
    icon = IconAudioRoute;
    label = 'toolbar.audioRoute';
    toggledIcon = IconSpeakerLight;
    
    constructor(props: Props) {
        super(props);
        
        this._onSelectDeviceFn(this._devicesFilter());
        AudioMode.updateDeviceList && AudioMode.updateDeviceList();
    }
    _onSelectDeviceFn: (Device) => Function;

    /**
     * Builds and returns a function which handles the selection of a device
     * on the sheet. The selected device will be used by {@code AudioMode}.
     *
     * @param {Device} device - Object representing the selected device.
     * @private
     * @returns {Function}
     */
    _onSelectDeviceFn(device: Device) {
        console.log(`_onSelectDeviceFn111${JSON.stringify(device)}`)
        AudioMode.setAudioDevice(device.uid || device.type);
    }

    _devicesFilter() {
        const selectDevice = this.props._devices.filter(d => d.type != "SPEAKER")[0];
        if(selectDevice){
            console.log(`AudioRouteButton${JSON.stringify(selectDevice)}`);
        }
        return selectDevice;
    }
    /**
     * Handles clicking / pressing the button, and opens the appropriate dialog.
     *
     * @private
     * @returns {void}
     */
    _handleClick() {
        // this.props.dispatch(openDialog(AudioRoutePickerDialog));
        console.log(`_handleClick${JSON.stringify(this.props._devices)}`)
        const selectDevice = this.props._devices.filter(d => !d.selected)[0];
        this._onSelectDeviceFn(selectDevice);
        AudioMode.updateDeviceList && AudioMode.updateDeviceList();
    }
    _isToggled() {
        const selectDevice = this.props._devices.filter(d => d.type == "SPEAKER" && d.selected);
        console.log(`_isToggled${selectDevice.length}`);
        return selectDevice && selectDevice.length > 0 ? true : false;
    }
}

function _mapStateToProps(state: Object) {
    return {
        _devices: state['features/mobile/audio-mode'].devices
    };
}
export default translate(connect(_mapStateToProps)(AudioRouteButton));


