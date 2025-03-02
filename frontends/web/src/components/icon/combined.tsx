/**
 * Copyright 2021 Shift Crypto AG
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

import { BitBox02Stylized, CaretDown } from './icon';
import style from './combined.module.css';

export const PointToBitBox02 = () => (
    <div className={style.point2bitbox02}>
        <CaretDown className={style.caret} />
        <BitBox02Stylized className={style.bitbox02} />
    </div>
);
