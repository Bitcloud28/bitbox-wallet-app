/**
 * Copyright 2020 Shift Crypto AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import 'jest';
import { mount } from 'enzyme';
jest.mock('../../i18n/i18n');
import i18n from '../../i18n/i18n';
import { LanguageSwitch } from './language';
import { act } from 'react-dom/test-utils';

describe('components/language/language', () => {
    describe('selectedIndex', () => {
        const supportedLangs = [
            {code: 'en', display: 'EN'},
            {code: 'en-US', display: 'EN'},
            {code: 'pt', display: 'PT'},
        ];

        supportedLangs.forEach((lang, idx) => {
            it(`returns exact match (${lang.code})`, async () => {
                await i18n.changeLanguage(lang.code)
               
                let ctx: any;
                act(() => {
                     /* @ts-ignore */
                    ctx = mount(<LanguageSwitch i18n={i18n} languages={supportedLangs} />);
                })
                
                expect(ctx.childAt(0).state('selectedIndex')).toEqual(idx);
            });
        });

        it('matches main language tag', async () => {
            await i18n.changeLanguage('pt_BR');
            /* @ts-ignore */
            const ctx = mount(<LanguageSwitch i18n={i18n} languages={supportedLangs} />);
            expect(ctx.childAt(0).state('selectedIndex')).toEqual(2); // 'pt'
        });

        it('returns default if none matched', async () => {
            await i18n.changeLanguage('it');
            /* @ts-ignore */
            const ctx = mount(<LanguageSwitch i18n={i18n} languages={supportedLangs} />);  
            expect(ctx.childAt(0).state('selectedIndex')).toEqual(0); // 'en'
        });
    });
});
