import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default function withFriendlyDate(Component) {
    class WrapperComponent extends React.Component {
        static propTypes = {
            date: PropTypes.string.isRequired,
        };
        
        getFriendlyDateString = date => {
            if (moment().diff(moment(date), 'day') <= 25) {
                return moment(date).fromNow();
            }
            return `${moment().diff(moment(date), 'day')} дней назад`;
        }

        render() {
            const { date } = this.props;
            const friendlyDate = this.getFriendlyDateString(date);
            return <Component {...this.props} date={friendlyDate} />;
        }
    }

    WrapperComponent.displayName = `withFriendlyDate(${Component.displayName || Component.name})`;

    return WrapperComponent;
}