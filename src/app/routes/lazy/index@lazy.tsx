import { component$, Host } from '@builder.io/qwik';
import { DocumentHead, EndpointHandler } from '@builder.io/qwik-city';
import { translate as t } from '../../../library/translate';

import { getHeaders } from '../../speak-config';

export default component$(() => {
    return (
        <Host>
            <h1>{t('app.title')}</h1>
            <h3>{t('lazy.subtitle')}</h3>
        </Host>
    );
});

export const onGet: EndpointHandler = ({ request }) => {
    return getHeaders(request);
};

export const head: DocumentHead = () => {
    return {
        title: 'Lazy',
    };
};
