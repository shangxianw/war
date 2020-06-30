type Long = protobuf.Long;

/** Namespace Protocol. */
declare namespace Protocol {

    /** Properties of a LoginGame_Request. */
    interface ILoginGame_Request {

        /** LoginGame_Request account */
        account?: (string|null);

        /** LoginGame_Request os */
        os?: (string|null);

        /** LoginGame_Request packgeId */
        packgeId?: (string|null);

        /** LoginGame_Request channelId */
        channelId?: (string|null);

        /** LoginGame_Request ua */
        ua?: (string|null);

        /** LoginGame_Request deviceId */
        deviceId?: (string|null);

        /** LoginGame_Request mainChannelId */
        mainChannelId?: (string|null);
    }

    /** Represents a LoginGame_Request. */
    class LoginGame_Request implements ILoginGame_Request {

        /**
         * Constructs a new LoginGame_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ILoginGame_Request);

        /** LoginGame_Request account. */
        public account: string;

        /** LoginGame_Request os. */
        public os: string;

        /** LoginGame_Request packgeId. */
        public packgeId: string;

        /** LoginGame_Request channelId. */
        public channelId: string;

        /** LoginGame_Request ua. */
        public ua: string;

        /** LoginGame_Request deviceId. */
        public deviceId: string;

        /** LoginGame_Request mainChannelId. */
        public mainChannelId: string;

        /**
         * Creates a new LoginGame_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginGame_Request instance
         */
        public static create(properties?: Protocol.ILoginGame_Request): Protocol.LoginGame_Request;

        /**
         * Encodes the specified LoginGame_Request message. Does not implicitly {@link Protocol.LoginGame_Request.verify|verify} messages.
         * @param message LoginGame_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ILoginGame_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginGame_Request message, length delimited. Does not implicitly {@link Protocol.LoginGame_Request.verify|verify} messages.
         * @param message LoginGame_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ILoginGame_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginGame_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginGame_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.LoginGame_Request;

        /**
         * Decodes a LoginGame_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginGame_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.LoginGame_Request;

        /**
         * Verifies a LoginGame_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Property. */
    interface IProperty {

        /** Property key */
        key?: (number|null);

        /** Property value */
        value?: (number|null);
    }

    /** Represents a Property. */
    class Property implements IProperty {

        /**
         * Constructs a new Property.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IProperty);

        /** Property key. */
        public key: number;

        /** Property value. */
        public value: number;

        /**
         * Creates a new Property instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Property instance
         */
        public static create(properties?: Protocol.IProperty): Protocol.Property;

        /**
         * Encodes the specified Property message. Does not implicitly {@link Protocol.Property.verify|verify} messages.
         * @param message Property message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IProperty, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Property message, length delimited. Does not implicitly {@link Protocol.Property.verify|verify} messages.
         * @param message Property message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IProperty, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Property message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Property
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Property;

        /**
         * Decodes a Property message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Property
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Property;

        /**
         * Verifies a Property message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ItemInfo. */
    interface IItemInfo {

        /** ItemInfo index */
        index?: (number|null);

        /** ItemInfo count */
        count?: (number|null);
    }

    /** Represents an ItemInfo. */
    class ItemInfo implements IItemInfo {

        /**
         * Constructs a new ItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IItemInfo);

        /** ItemInfo index. */
        public index: number;

        /** ItemInfo count. */
        public count: number;

        /**
         * Creates a new ItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemInfo instance
         */
        public static create(properties?: Protocol.IItemInfo): Protocol.ItemInfo;

        /**
         * Encodes the specified ItemInfo message. Does not implicitly {@link Protocol.ItemInfo.verify|verify} messages.
         * @param message ItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IItemInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemInfo message, length delimited. Does not implicitly {@link Protocol.ItemInfo.verify|verify} messages.
         * @param message ItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IItemInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.ItemInfo;

        /**
         * Decodes an ItemInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.ItemInfo;

        /**
         * Verifies an ItemInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LoginGame_Respond. */
    interface ILoginGame_Respond {

        /** LoginGame_Respond account */
        account?: (string|null);

        /** LoginGame_Respond roleId */
        roleId?: (number|Long|null);

        /** LoginGame_Respond name */
        name?: (string|null);

        /** LoginGame_Respond ret */
        ret?: (number|null);

        /** LoginGame_Respond lineUp1 */
        lineUp1?: (number[]|null);

        /** LoginGame_Respond lineUp2 */
        lineUp2?: (number[]|null);

        /** LoginGame_Respond lineUp3 */
        lineUp3?: (number[]|null);

        /** LoginGame_Respond lineUp4 */
        lineUp4?: (number[]|null);

        /** LoginGame_Respond lineUp5 */
        lineUp5?: (number[]|null);

        /** LoginGame_Respond lineUp6 */
        lineUp6?: (number[]|null);

        /** LoginGame_Respond heros */
        heros?: (Protocol.IHero[]|null);

        /** LoginGame_Respond state */
        state?: (number|null);

        /** LoginGame_Respond roomId */
        roomId?: (string|null);

        /** LoginGame_Respond tasks */
        tasks?: (Protocol.ITask[]|null);

        /** LoginGame_Respond pros */
        pros?: (Protocol.IProperty[]|null);

        /** LoginGame_Respond capacity */
        capacity?: (number|null);

        /** LoginGame_Respond items */
        items?: (Protocol.IItemInfo[]|null);

        /** LoginGame_Respond curLineUp */
        curLineUp?: (number|null);

        /** LoginGame_Respond familyId */
        familyId?: (string|null);

        /** LoginGame_Respond familyJob */
        familyJob?: (number|null);

        /** LoginGame_Respond passDay */
        passDay?: (number|null);

        /** LoginGame_Respond newRoleReward */
        newRoleReward?: (boolean|null);

        /** LoginGame_Respond serverId */
        serverId?: (number|null);

        /** LoginGame_Respond isNew */
        isNew?: (boolean|null);

        /** LoginGame_Respond guides */
        guides?: (string[]|null);

        /** LoginGame_Respond createTime */
        createTime?: (string|null);

        /** LoginGame_Respond ip */
        ip?: (string|null);
    }

    /** Represents a LoginGame_Respond. */
    class LoginGame_Respond implements ILoginGame_Respond {

        /**
         * Constructs a new LoginGame_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ILoginGame_Respond);

        /** LoginGame_Respond account. */
        public account: string;

        /** LoginGame_Respond roleId. */
        public roleId: (number|Long);

        /** LoginGame_Respond name. */
        public name: string;

        /** LoginGame_Respond ret. */
        public ret: number;

        /** LoginGame_Respond lineUp1. */
        public lineUp1: number[];

        /** LoginGame_Respond lineUp2. */
        public lineUp2: number[];

        /** LoginGame_Respond lineUp3. */
        public lineUp3: number[];

        /** LoginGame_Respond lineUp4. */
        public lineUp4: number[];

        /** LoginGame_Respond lineUp5. */
        public lineUp5: number[];

        /** LoginGame_Respond lineUp6. */
        public lineUp6: number[];

        /** LoginGame_Respond heros. */
        public heros: Protocol.IHero[];

        /** LoginGame_Respond state. */
        public state: number;

        /** LoginGame_Respond roomId. */
        public roomId: string;

        /** LoginGame_Respond tasks. */
        public tasks: Protocol.ITask[];

        /** LoginGame_Respond pros. */
        public pros: Protocol.IProperty[];

        /** LoginGame_Respond capacity. */
        public capacity: number;

        /** LoginGame_Respond items. */
        public items: Protocol.IItemInfo[];

        /** LoginGame_Respond curLineUp. */
        public curLineUp: number;

        /** LoginGame_Respond familyId. */
        public familyId: string;

        /** LoginGame_Respond familyJob. */
        public familyJob: number;

        /** LoginGame_Respond passDay. */
        public passDay: number;

        /** LoginGame_Respond newRoleReward. */
        public newRoleReward: boolean;

        /** LoginGame_Respond serverId. */
        public serverId: number;

        /** LoginGame_Respond isNew. */
        public isNew: boolean;

        /** LoginGame_Respond guides. */
        public guides: string[];

        /** LoginGame_Respond createTime. */
        public createTime: string;

        /** LoginGame_Respond ip. */
        public ip: string;

        /**
         * Creates a new LoginGame_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginGame_Respond instance
         */
        public static create(properties?: Protocol.ILoginGame_Respond): Protocol.LoginGame_Respond;

        /**
         * Encodes the specified LoginGame_Respond message. Does not implicitly {@link Protocol.LoginGame_Respond.verify|verify} messages.
         * @param message LoginGame_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ILoginGame_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginGame_Respond message, length delimited. Does not implicitly {@link Protocol.LoginGame_Respond.verify|verify} messages.
         * @param message LoginGame_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ILoginGame_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginGame_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginGame_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.LoginGame_Respond;

        /**
         * Decodes a LoginGame_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginGame_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.LoginGame_Respond;

        /**
         * Verifies a LoginGame_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BeginMatch_Request. */
    interface IBeginMatch_Request {

        /** BeginMatch_Request type */
        type?: (number|null);

        /** BeginMatch_Request lineUp */
        lineUp?: (number|null);
    }

    /** Represents a BeginMatch_Request. */
    class BeginMatch_Request implements IBeginMatch_Request {

        /**
         * Constructs a new BeginMatch_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBeginMatch_Request);

        /** BeginMatch_Request type. */
        public type: number;

        /** BeginMatch_Request lineUp. */
        public lineUp: number;

        /**
         * Creates a new BeginMatch_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeginMatch_Request instance
         */
        public static create(properties?: Protocol.IBeginMatch_Request): Protocol.BeginMatch_Request;

        /**
         * Encodes the specified BeginMatch_Request message. Does not implicitly {@link Protocol.BeginMatch_Request.verify|verify} messages.
         * @param message BeginMatch_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBeginMatch_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BeginMatch_Request message, length delimited. Does not implicitly {@link Protocol.BeginMatch_Request.verify|verify} messages.
         * @param message BeginMatch_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBeginMatch_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BeginMatch_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeginMatch_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BeginMatch_Request;

        /**
         * Decodes a BeginMatch_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeginMatch_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BeginMatch_Request;

        /**
         * Verifies a BeginMatch_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BeginMatch_Respond. */
    interface IBeginMatch_Respond {

        /** BeginMatch_Respond ret */
        ret?: (number|null);
    }

    /** Represents a BeginMatch_Respond. */
    class BeginMatch_Respond implements IBeginMatch_Respond {

        /**
         * Constructs a new BeginMatch_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBeginMatch_Respond);

        /** BeginMatch_Respond ret. */
        public ret: number;

        /**
         * Creates a new BeginMatch_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeginMatch_Respond instance
         */
        public static create(properties?: Protocol.IBeginMatch_Respond): Protocol.BeginMatch_Respond;

        /**
         * Encodes the specified BeginMatch_Respond message. Does not implicitly {@link Protocol.BeginMatch_Respond.verify|verify} messages.
         * @param message BeginMatch_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBeginMatch_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BeginMatch_Respond message, length delimited. Does not implicitly {@link Protocol.BeginMatch_Respond.verify|verify} messages.
         * @param message BeginMatch_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBeginMatch_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BeginMatch_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeginMatch_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BeginMatch_Respond;

        /**
         * Decodes a BeginMatch_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeginMatch_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BeginMatch_Respond;

        /**
         * Verifies a BeginMatch_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HearBeat_Request. */
    interface IHearBeat_Request {
    }

    /** Represents a HearBeat_Request. */
    class HearBeat_Request implements IHearBeat_Request {

        /**
         * Constructs a new HearBeat_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IHearBeat_Request);

        /**
         * Creates a new HearBeat_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HearBeat_Request instance
         */
        public static create(properties?: Protocol.IHearBeat_Request): Protocol.HearBeat_Request;

        /**
         * Encodes the specified HearBeat_Request message. Does not implicitly {@link Protocol.HearBeat_Request.verify|verify} messages.
         * @param message HearBeat_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IHearBeat_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HearBeat_Request message, length delimited. Does not implicitly {@link Protocol.HearBeat_Request.verify|verify} messages.
         * @param message HearBeat_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IHearBeat_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HearBeat_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HearBeat_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.HearBeat_Request;

        /**
         * Decodes a HearBeat_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HearBeat_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.HearBeat_Request;

        /**
         * Verifies a HearBeat_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HearBeat_Respond. */
    interface IHearBeat_Respond {

        /** HearBeat_Respond state */
        state?: (number|null);
    }

    /** Represents a HearBeat_Respond. */
    class HearBeat_Respond implements IHearBeat_Respond {

        /**
         * Constructs a new HearBeat_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IHearBeat_Respond);

        /** HearBeat_Respond state. */
        public state: number;

        /**
         * Creates a new HearBeat_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HearBeat_Respond instance
         */
        public static create(properties?: Protocol.IHearBeat_Respond): Protocol.HearBeat_Respond;

        /**
         * Encodes the specified HearBeat_Respond message. Does not implicitly {@link Protocol.HearBeat_Respond.verify|verify} messages.
         * @param message HearBeat_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IHearBeat_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HearBeat_Respond message, length delimited. Does not implicitly {@link Protocol.HearBeat_Respond.verify|verify} messages.
         * @param message HearBeat_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IHearBeat_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HearBeat_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HearBeat_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.HearBeat_Respond;

        /**
         * Decodes a HearBeat_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HearBeat_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.HearBeat_Respond;

        /**
         * Verifies a HearBeat_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CancleMatch_Request. */
    interface ICancleMatch_Request {
    }

    /** Represents a CancleMatch_Request. */
    class CancleMatch_Request implements ICancleMatch_Request {

        /**
         * Constructs a new CancleMatch_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICancleMatch_Request);

        /**
         * Creates a new CancleMatch_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancleMatch_Request instance
         */
        public static create(properties?: Protocol.ICancleMatch_Request): Protocol.CancleMatch_Request;

        /**
         * Encodes the specified CancleMatch_Request message. Does not implicitly {@link Protocol.CancleMatch_Request.verify|verify} messages.
         * @param message CancleMatch_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICancleMatch_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CancleMatch_Request message, length delimited. Does not implicitly {@link Protocol.CancleMatch_Request.verify|verify} messages.
         * @param message CancleMatch_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICancleMatch_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CancleMatch_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancleMatch_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.CancleMatch_Request;

        /**
         * Decodes a CancleMatch_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancleMatch_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.CancleMatch_Request;

        /**
         * Verifies a CancleMatch_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CancleMatch_Respond. */
    interface ICancleMatch_Respond {

        /** CancleMatch_Respond ret */
        ret?: (number|null);
    }

    /** Represents a CancleMatch_Respond. */
    class CancleMatch_Respond implements ICancleMatch_Respond {

        /**
         * Constructs a new CancleMatch_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICancleMatch_Respond);

        /** CancleMatch_Respond ret. */
        public ret: number;

        /**
         * Creates a new CancleMatch_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancleMatch_Respond instance
         */
        public static create(properties?: Protocol.ICancleMatch_Respond): Protocol.CancleMatch_Respond;

        /**
         * Encodes the specified CancleMatch_Respond message. Does not implicitly {@link Protocol.CancleMatch_Respond.verify|verify} messages.
         * @param message CancleMatch_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICancleMatch_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CancleMatch_Respond message, length delimited. Does not implicitly {@link Protocol.CancleMatch_Respond.verify|verify} messages.
         * @param message CancleMatch_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICancleMatch_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CancleMatch_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancleMatch_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.CancleMatch_Respond;

        /**
         * Decodes a CancleMatch_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancleMatch_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.CancleMatch_Respond;

        /**
         * Verifies a CancleMatch_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GMCommand_Request. */
    interface IGMCommand_Request {

        /** GMCommand_Request command */
        command?: (string|null);
    }

    /** Represents a GMCommand_Request. */
    class GMCommand_Request implements IGMCommand_Request {

        /**
         * Constructs a new GMCommand_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGMCommand_Request);

        /** GMCommand_Request command. */
        public command: string;

        /**
         * Creates a new GMCommand_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GMCommand_Request instance
         */
        public static create(properties?: Protocol.IGMCommand_Request): Protocol.GMCommand_Request;

        /**
         * Encodes the specified GMCommand_Request message. Does not implicitly {@link Protocol.GMCommand_Request.verify|verify} messages.
         * @param message GMCommand_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGMCommand_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GMCommand_Request message, length delimited. Does not implicitly {@link Protocol.GMCommand_Request.verify|verify} messages.
         * @param message GMCommand_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGMCommand_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GMCommand_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GMCommand_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GMCommand_Request;

        /**
         * Decodes a GMCommand_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GMCommand_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GMCommand_Request;

        /**
         * Verifies a GMCommand_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GMCommand_Respond. */
    interface IGMCommand_Respond {

        /** GMCommand_Respond ret */
        ret?: (boolean|null);
    }

    /** Represents a GMCommand_Respond. */
    class GMCommand_Respond implements IGMCommand_Respond {

        /**
         * Constructs a new GMCommand_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGMCommand_Respond);

        /** GMCommand_Respond ret. */
        public ret: boolean;

        /**
         * Creates a new GMCommand_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GMCommand_Respond instance
         */
        public static create(properties?: Protocol.IGMCommand_Respond): Protocol.GMCommand_Respond;

        /**
         * Encodes the specified GMCommand_Respond message. Does not implicitly {@link Protocol.GMCommand_Respond.verify|verify} messages.
         * @param message GMCommand_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGMCommand_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GMCommand_Respond message, length delimited. Does not implicitly {@link Protocol.GMCommand_Respond.verify|verify} messages.
         * @param message GMCommand_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGMCommand_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GMCommand_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GMCommand_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GMCommand_Respond;

        /**
         * Decodes a GMCommand_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GMCommand_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GMCommand_Respond;

        /**
         * Verifies a GMCommand_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SetFightLineUp_Request. */
    interface ISetFightLineUp_Request {

        /** SetFightLineUp_Request lineUpNum */
        lineUpNum?: (number|null);
    }

    /** Represents a SetFightLineUp_Request. */
    class SetFightLineUp_Request implements ISetFightLineUp_Request {

        /**
         * Constructs a new SetFightLineUp_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISetFightLineUp_Request);

        /** SetFightLineUp_Request lineUpNum. */
        public lineUpNum: number;

        /**
         * Creates a new SetFightLineUp_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetFightLineUp_Request instance
         */
        public static create(properties?: Protocol.ISetFightLineUp_Request): Protocol.SetFightLineUp_Request;

        /**
         * Encodes the specified SetFightLineUp_Request message. Does not implicitly {@link Protocol.SetFightLineUp_Request.verify|verify} messages.
         * @param message SetFightLineUp_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISetFightLineUp_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SetFightLineUp_Request message, length delimited. Does not implicitly {@link Protocol.SetFightLineUp_Request.verify|verify} messages.
         * @param message SetFightLineUp_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISetFightLineUp_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SetFightLineUp_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetFightLineUp_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SetFightLineUp_Request;

        /**
         * Decodes a SetFightLineUp_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetFightLineUp_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SetFightLineUp_Request;

        /**
         * Verifies a SetFightLineUp_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SetFightLineUp_Respond. */
    interface ISetFightLineUp_Respond {

        /** SetFightLineUp_Respond lineUpNum */
        lineUpNum?: (number|null);
    }

    /** Represents a SetFightLineUp_Respond. */
    class SetFightLineUp_Respond implements ISetFightLineUp_Respond {

        /**
         * Constructs a new SetFightLineUp_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISetFightLineUp_Respond);

        /** SetFightLineUp_Respond lineUpNum. */
        public lineUpNum: number;

        /**
         * Creates a new SetFightLineUp_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetFightLineUp_Respond instance
         */
        public static create(properties?: Protocol.ISetFightLineUp_Respond): Protocol.SetFightLineUp_Respond;

        /**
         * Encodes the specified SetFightLineUp_Respond message. Does not implicitly {@link Protocol.SetFightLineUp_Respond.verify|verify} messages.
         * @param message SetFightLineUp_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISetFightLineUp_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SetFightLineUp_Respond message, length delimited. Does not implicitly {@link Protocol.SetFightLineUp_Respond.verify|verify} messages.
         * @param message SetFightLineUp_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISetFightLineUp_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SetFightLineUp_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetFightLineUp_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SetFightLineUp_Respond;

        /**
         * Decodes a SetFightLineUp_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetFightLineUp_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SetFightLineUp_Respond;

        /**
         * Verifies a SetFightLineUp_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SetLineUp_Request. */
    interface ISetLineUp_Request {

        /** SetLineUp_Request lineUpNum */
        lineUpNum?: (number|null);

        /** SetLineUp_Request heroIds */
        heroIds?: (number[]|null);
    }

    /** Represents a SetLineUp_Request. */
    class SetLineUp_Request implements ISetLineUp_Request {

        /**
         * Constructs a new SetLineUp_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISetLineUp_Request);

        /** SetLineUp_Request lineUpNum. */
        public lineUpNum: number;

        /** SetLineUp_Request heroIds. */
        public heroIds: number[];

        /**
         * Creates a new SetLineUp_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetLineUp_Request instance
         */
        public static create(properties?: Protocol.ISetLineUp_Request): Protocol.SetLineUp_Request;

        /**
         * Encodes the specified SetLineUp_Request message. Does not implicitly {@link Protocol.SetLineUp_Request.verify|verify} messages.
         * @param message SetLineUp_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISetLineUp_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SetLineUp_Request message, length delimited. Does not implicitly {@link Protocol.SetLineUp_Request.verify|verify} messages.
         * @param message SetLineUp_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISetLineUp_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SetLineUp_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetLineUp_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SetLineUp_Request;

        /**
         * Decodes a SetLineUp_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetLineUp_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SetLineUp_Request;

        /**
         * Verifies a SetLineUp_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SetLineUp_Respond. */
    interface ISetLineUp_Respond {

        /** SetLineUp_Respond ret */
        ret?: (number|null);

        /** SetLineUp_Respond lineUpNum */
        lineUpNum?: (number|null);

        /** SetLineUp_Respond heroIds */
        heroIds?: (number[]|null);
    }

    /** Represents a SetLineUp_Respond. */
    class SetLineUp_Respond implements ISetLineUp_Respond {

        /**
         * Constructs a new SetLineUp_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISetLineUp_Respond);

        /** SetLineUp_Respond ret. */
        public ret: number;

        /** SetLineUp_Respond lineUpNum. */
        public lineUpNum: number;

        /** SetLineUp_Respond heroIds. */
        public heroIds: number[];

        /**
         * Creates a new SetLineUp_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetLineUp_Respond instance
         */
        public static create(properties?: Protocol.ISetLineUp_Respond): Protocol.SetLineUp_Respond;

        /**
         * Encodes the specified SetLineUp_Respond message. Does not implicitly {@link Protocol.SetLineUp_Respond.verify|verify} messages.
         * @param message SetLineUp_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISetLineUp_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SetLineUp_Respond message, length delimited. Does not implicitly {@link Protocol.SetLineUp_Respond.verify|verify} messages.
         * @param message SetLineUp_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISetLineUp_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SetLineUp_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetLineUp_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SetLineUp_Respond;

        /**
         * Decodes a SetLineUp_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetLineUp_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SetLineUp_Respond;

        /**
         * Verifies a SetLineUp_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetRankRange_Request. */
    interface IGetRankRange_Request {

        /** GetRankRange_Request begin */
        begin?: (number|null);

        /** GetRankRange_Request end */
        end?: (number|null);

        /** GetRankRange_Request type */
        type?: (number|null);
    }

    /** Represents a GetRankRange_Request. */
    class GetRankRange_Request implements IGetRankRange_Request {

        /**
         * Constructs a new GetRankRange_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetRankRange_Request);

        /** GetRankRange_Request begin. */
        public begin: number;

        /** GetRankRange_Request end. */
        public end: number;

        /** GetRankRange_Request type. */
        public type: number;

        /**
         * Creates a new GetRankRange_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRankRange_Request instance
         */
        public static create(properties?: Protocol.IGetRankRange_Request): Protocol.GetRankRange_Request;

        /**
         * Encodes the specified GetRankRange_Request message. Does not implicitly {@link Protocol.GetRankRange_Request.verify|verify} messages.
         * @param message GetRankRange_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetRankRange_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetRankRange_Request message, length delimited. Does not implicitly {@link Protocol.GetRankRange_Request.verify|verify} messages.
         * @param message GetRankRange_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetRankRange_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetRankRange_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRankRange_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetRankRange_Request;

        /**
         * Decodes a GetRankRange_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRankRange_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetRankRange_Request;

        /**
         * Verifies a GetRankRange_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetRankRange_Respond. */
    interface IGetRankRange_Respond {

        /** GetRankRange_Respond type */
        type?: (number|null);

        /** GetRankRange_Respond infos */
        infos?: (Protocol.IRankInfo[]|null);

        /** GetRankRange_Respond begin */
        begin?: (number|null);

        /** GetRankRange_Respond end */
        end?: (number|null);
    }

    /** Represents a GetRankRange_Respond. */
    class GetRankRange_Respond implements IGetRankRange_Respond {

        /**
         * Constructs a new GetRankRange_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetRankRange_Respond);

        /** GetRankRange_Respond type. */
        public type: number;

        /** GetRankRange_Respond infos. */
        public infos: Protocol.IRankInfo[];

        /** GetRankRange_Respond begin. */
        public begin: number;

        /** GetRankRange_Respond end. */
        public end: number;

        /**
         * Creates a new GetRankRange_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRankRange_Respond instance
         */
        public static create(properties?: Protocol.IGetRankRange_Respond): Protocol.GetRankRange_Respond;

        /**
         * Encodes the specified GetRankRange_Respond message. Does not implicitly {@link Protocol.GetRankRange_Respond.verify|verify} messages.
         * @param message GetRankRange_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetRankRange_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetRankRange_Respond message, length delimited. Does not implicitly {@link Protocol.GetRankRange_Respond.verify|verify} messages.
         * @param message GetRankRange_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetRankRange_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetRankRange_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRankRange_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetRankRange_Respond;

        /**
         * Decodes a GetRankRange_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRankRange_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetRankRange_Respond;

        /**
         * Verifies a GetRankRange_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TaskChange_Respond. */
    interface ITaskChange_Respond {

        /** TaskChange_Respond tasks */
        tasks?: (Protocol.ITask[]|null);
    }

    /** Represents a TaskChange_Respond. */
    class TaskChange_Respond implements ITaskChange_Respond {

        /**
         * Constructs a new TaskChange_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ITaskChange_Respond);

        /** TaskChange_Respond tasks. */
        public tasks: Protocol.ITask[];

        /**
         * Creates a new TaskChange_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskChange_Respond instance
         */
        public static create(properties?: Protocol.ITaskChange_Respond): Protocol.TaskChange_Respond;

        /**
         * Encodes the specified TaskChange_Respond message. Does not implicitly {@link Protocol.TaskChange_Respond.verify|verify} messages.
         * @param message TaskChange_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ITaskChange_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TaskChange_Respond message, length delimited. Does not implicitly {@link Protocol.TaskChange_Respond.verify|verify} messages.
         * @param message TaskChange_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ITaskChange_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskChange_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskChange_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.TaskChange_Respond;

        /**
         * Decodes a TaskChange_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskChange_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.TaskChange_Respond;

        /**
         * Verifies a TaskChange_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FinishTask_Request. */
    interface IFinishTask_Request {

        /** FinishTask_Request taskIndex */
        taskIndex?: (number|null);
    }

    /** Represents a FinishTask_Request. */
    class FinishTask_Request implements IFinishTask_Request {

        /**
         * Constructs a new FinishTask_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFinishTask_Request);

        /** FinishTask_Request taskIndex. */
        public taskIndex: number;

        /**
         * Creates a new FinishTask_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FinishTask_Request instance
         */
        public static create(properties?: Protocol.IFinishTask_Request): Protocol.FinishTask_Request;

        /**
         * Encodes the specified FinishTask_Request message. Does not implicitly {@link Protocol.FinishTask_Request.verify|verify} messages.
         * @param message FinishTask_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFinishTask_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FinishTask_Request message, length delimited. Does not implicitly {@link Protocol.FinishTask_Request.verify|verify} messages.
         * @param message FinishTask_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFinishTask_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FinishTask_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FinishTask_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FinishTask_Request;

        /**
         * Decodes a FinishTask_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FinishTask_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FinishTask_Request;

        /**
         * Verifies a FinishTask_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RefreshTask_Request. */
    interface IRefreshTask_Request {

        /** RefreshTask_Request taskIndex */
        taskIndex?: (number|null);
    }

    /** Represents a RefreshTask_Request. */
    class RefreshTask_Request implements IRefreshTask_Request {

        /**
         * Constructs a new RefreshTask_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IRefreshTask_Request);

        /** RefreshTask_Request taskIndex. */
        public taskIndex: number;

        /**
         * Creates a new RefreshTask_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshTask_Request instance
         */
        public static create(properties?: Protocol.IRefreshTask_Request): Protocol.RefreshTask_Request;

        /**
         * Encodes the specified RefreshTask_Request message. Does not implicitly {@link Protocol.RefreshTask_Request.verify|verify} messages.
         * @param message RefreshTask_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IRefreshTask_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RefreshTask_Request message, length delimited. Does not implicitly {@link Protocol.RefreshTask_Request.verify|verify} messages.
         * @param message RefreshTask_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IRefreshTask_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RefreshTask_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshTask_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.RefreshTask_Request;

        /**
         * Decodes a RefreshTask_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshTask_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.RefreshTask_Request;

        /**
         * Verifies a RefreshTask_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetLogicTime_Request. */
    interface IGetLogicTime_Request {
    }

    /** Represents a GetLogicTime_Request. */
    class GetLogicTime_Request implements IGetLogicTime_Request {

        /**
         * Constructs a new GetLogicTime_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetLogicTime_Request);

        /**
         * Creates a new GetLogicTime_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLogicTime_Request instance
         */
        public static create(properties?: Protocol.IGetLogicTime_Request): Protocol.GetLogicTime_Request;

        /**
         * Encodes the specified GetLogicTime_Request message. Does not implicitly {@link Protocol.GetLogicTime_Request.verify|verify} messages.
         * @param message GetLogicTime_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetLogicTime_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetLogicTime_Request message, length delimited. Does not implicitly {@link Protocol.GetLogicTime_Request.verify|verify} messages.
         * @param message GetLogicTime_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetLogicTime_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetLogicTime_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLogicTime_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetLogicTime_Request;

        /**
         * Decodes a GetLogicTime_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLogicTime_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetLogicTime_Request;

        /**
         * Verifies a GetLogicTime_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetLogicTime_Respond. */
    interface IGetLogicTime_Respond {

        /** GetLogicTime_Respond time */
        time?: (number|Long|null);
    }

    /** Represents a GetLogicTime_Respond. */
    class GetLogicTime_Respond implements IGetLogicTime_Respond {

        /**
         * Constructs a new GetLogicTime_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetLogicTime_Respond);

        /** GetLogicTime_Respond time. */
        public time: (number|Long);

        /**
         * Creates a new GetLogicTime_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLogicTime_Respond instance
         */
        public static create(properties?: Protocol.IGetLogicTime_Respond): Protocol.GetLogicTime_Respond;

        /**
         * Encodes the specified GetLogicTime_Respond message. Does not implicitly {@link Protocol.GetLogicTime_Respond.verify|verify} messages.
         * @param message GetLogicTime_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetLogicTime_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetLogicTime_Respond message, length delimited. Does not implicitly {@link Protocol.GetLogicTime_Respond.verify|verify} messages.
         * @param message GetLogicTime_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetLogicTime_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetLogicTime_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLogicTime_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetLogicTime_Respond;

        /**
         * Decodes a GetLogicTime_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLogicTime_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetLogicTime_Respond;

        /**
         * Verifies a GetLogicTime_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PropertyChange_Respond. */
    interface IPropertyChange_Respond {

        /** PropertyChange_Respond pros */
        pros?: (Protocol.IProperty[]|null);
    }

    /** Represents a PropertyChange_Respond. */
    class PropertyChange_Respond implements IPropertyChange_Respond {

        /**
         * Constructs a new PropertyChange_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IPropertyChange_Respond);

        /** PropertyChange_Respond pros. */
        public pros: Protocol.IProperty[];

        /**
         * Creates a new PropertyChange_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PropertyChange_Respond instance
         */
        public static create(properties?: Protocol.IPropertyChange_Respond): Protocol.PropertyChange_Respond;

        /**
         * Encodes the specified PropertyChange_Respond message. Does not implicitly {@link Protocol.PropertyChange_Respond.verify|verify} messages.
         * @param message PropertyChange_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IPropertyChange_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PropertyChange_Respond message, length delimited. Does not implicitly {@link Protocol.PropertyChange_Respond.verify|verify} messages.
         * @param message PropertyChange_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IPropertyChange_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PropertyChange_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PropertyChange_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.PropertyChange_Respond;

        /**
         * Decodes a PropertyChange_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PropertyChange_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.PropertyChange_Respond;

        /**
         * Verifies a PropertyChange_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TaskScopeBoxOpen_Request. */
    interface ITaskScopeBoxOpen_Request {
    }

    /** Represents a TaskScopeBoxOpen_Request. */
    class TaskScopeBoxOpen_Request implements ITaskScopeBoxOpen_Request {

        /**
         * Constructs a new TaskScopeBoxOpen_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ITaskScopeBoxOpen_Request);

        /**
         * Creates a new TaskScopeBoxOpen_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskScopeBoxOpen_Request instance
         */
        public static create(properties?: Protocol.ITaskScopeBoxOpen_Request): Protocol.TaskScopeBoxOpen_Request;

        /**
         * Encodes the specified TaskScopeBoxOpen_Request message. Does not implicitly {@link Protocol.TaskScopeBoxOpen_Request.verify|verify} messages.
         * @param message TaskScopeBoxOpen_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ITaskScopeBoxOpen_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TaskScopeBoxOpen_Request message, length delimited. Does not implicitly {@link Protocol.TaskScopeBoxOpen_Request.verify|verify} messages.
         * @param message TaskScopeBoxOpen_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ITaskScopeBoxOpen_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskScopeBoxOpen_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskScopeBoxOpen_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.TaskScopeBoxOpen_Request;

        /**
         * Decodes a TaskScopeBoxOpen_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskScopeBoxOpen_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.TaskScopeBoxOpen_Request;

        /**
         * Verifies a TaskScopeBoxOpen_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Reward_Respond. */
    interface IReward_Respond {

        /** Reward_Respond rewards */
        rewards?: (Protocol.IReward[]|null);
    }

    /** Represents a Reward_Respond. */
    class Reward_Respond implements IReward_Respond {

        /**
         * Constructs a new Reward_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IReward_Respond);

        /** Reward_Respond rewards. */
        public rewards: Protocol.IReward[];

        /**
         * Creates a new Reward_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reward_Respond instance
         */
        public static create(properties?: Protocol.IReward_Respond): Protocol.Reward_Respond;

        /**
         * Encodes the specified Reward_Respond message. Does not implicitly {@link Protocol.Reward_Respond.verify|verify} messages.
         * @param message Reward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Reward_Respond message, length delimited. Does not implicitly {@link Protocol.Reward_Respond.verify|verify} messages.
         * @param message Reward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Reward_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Reward_Respond;

        /**
         * Decodes a Reward_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Reward_Respond;

        /**
         * Verifies a Reward_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ItemChange_Respond. */
    interface IItemChange_Respond {

        /** ItemChange_Respond items */
        items?: (Protocol.IItemInfo[]|null);
    }

    /** Represents an ItemChange_Respond. */
    class ItemChange_Respond implements IItemChange_Respond {

        /**
         * Constructs a new ItemChange_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IItemChange_Respond);

        /** ItemChange_Respond items. */
        public items: Protocol.IItemInfo[];

        /**
         * Creates a new ItemChange_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemChange_Respond instance
         */
        public static create(properties?: Protocol.IItemChange_Respond): Protocol.ItemChange_Respond;

        /**
         * Encodes the specified ItemChange_Respond message. Does not implicitly {@link Protocol.ItemChange_Respond.verify|verify} messages.
         * @param message ItemChange_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IItemChange_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemChange_Respond message, length delimited. Does not implicitly {@link Protocol.ItemChange_Respond.verify|verify} messages.
         * @param message ItemChange_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IItemChange_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemChange_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemChange_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.ItemChange_Respond;

        /**
         * Decodes an ItemChange_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemChange_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.ItemChange_Respond;

        /**
         * Verifies an ItemChange_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HeroLevelUp_Request. */
    interface IHeroLevelUp_Request {

        /** HeroLevelUp_Request index */
        index?: (number|null);
    }

    /** Represents a HeroLevelUp_Request. */
    class HeroLevelUp_Request implements IHeroLevelUp_Request {

        /**
         * Constructs a new HeroLevelUp_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IHeroLevelUp_Request);

        /** HeroLevelUp_Request index. */
        public index: number;

        /**
         * Creates a new HeroLevelUp_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroLevelUp_Request instance
         */
        public static create(properties?: Protocol.IHeroLevelUp_Request): Protocol.HeroLevelUp_Request;

        /**
         * Encodes the specified HeroLevelUp_Request message. Does not implicitly {@link Protocol.HeroLevelUp_Request.verify|verify} messages.
         * @param message HeroLevelUp_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IHeroLevelUp_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeroLevelUp_Request message, length delimited. Does not implicitly {@link Protocol.HeroLevelUp_Request.verify|verify} messages.
         * @param message HeroLevelUp_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IHeroLevelUp_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroLevelUp_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroLevelUp_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.HeroLevelUp_Request;

        /**
         * Decodes a HeroLevelUp_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroLevelUp_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.HeroLevelUp_Request;

        /**
         * Verifies a HeroLevelUp_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HeroLevelUp_Respond. */
    interface IHeroLevelUp_Respond {

        /** HeroLevelUp_Respond index */
        index?: (number|null);

        /** HeroLevelUp_Respond level */
        level?: (number|null);

        /** HeroLevelUp_Respond ret */
        ret?: (number|null);

        /** HeroLevelUp_Respond count */
        count?: (number|null);
    }

    /** Represents a HeroLevelUp_Respond. */
    class HeroLevelUp_Respond implements IHeroLevelUp_Respond {

        /**
         * Constructs a new HeroLevelUp_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IHeroLevelUp_Respond);

        /** HeroLevelUp_Respond index. */
        public index: number;

        /** HeroLevelUp_Respond level. */
        public level: number;

        /** HeroLevelUp_Respond ret. */
        public ret: number;

        /** HeroLevelUp_Respond count. */
        public count: number;

        /**
         * Creates a new HeroLevelUp_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroLevelUp_Respond instance
         */
        public static create(properties?: Protocol.IHeroLevelUp_Respond): Protocol.HeroLevelUp_Respond;

        /**
         * Encodes the specified HeroLevelUp_Respond message. Does not implicitly {@link Protocol.HeroLevelUp_Respond.verify|verify} messages.
         * @param message HeroLevelUp_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IHeroLevelUp_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeroLevelUp_Respond message, length delimited. Does not implicitly {@link Protocol.HeroLevelUp_Respond.verify|verify} messages.
         * @param message HeroLevelUp_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IHeroLevelUp_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroLevelUp_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroLevelUp_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.HeroLevelUp_Respond;

        /**
         * Decodes a HeroLevelUp_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroLevelUp_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.HeroLevelUp_Respond;

        /**
         * Verifies a HeroLevelUp_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ErrorNotice_Respond. */
    interface IErrorNotice_Respond {

        /** ErrorNotice_Respond errorCode */
        errorCode?: (number|null);
    }

    /** Represents an ErrorNotice_Respond. */
    class ErrorNotice_Respond implements IErrorNotice_Respond {

        /**
         * Constructs a new ErrorNotice_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IErrorNotice_Respond);

        /** ErrorNotice_Respond errorCode. */
        public errorCode: number;

        /**
         * Creates a new ErrorNotice_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorNotice_Respond instance
         */
        public static create(properties?: Protocol.IErrorNotice_Respond): Protocol.ErrorNotice_Respond;

        /**
         * Encodes the specified ErrorNotice_Respond message. Does not implicitly {@link Protocol.ErrorNotice_Respond.verify|verify} messages.
         * @param message ErrorNotice_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IErrorNotice_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ErrorNotice_Respond message, length delimited. Does not implicitly {@link Protocol.ErrorNotice_Respond.verify|verify} messages.
         * @param message ErrorNotice_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IErrorNotice_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ErrorNotice_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorNotice_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.ErrorNotice_Respond;

        /**
         * Decodes an ErrorNotice_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorNotice_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.ErrorNotice_Respond;

        /**
         * Verifies an ErrorNotice_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SkillLevelUp_Request. */
    interface ISkillLevelUp_Request {

        /** SkillLevelUp_Request heroId */
        heroId?: (string|null);

        /** SkillLevelUp_Request index */
        index?: (number|null);
    }

    /** Represents a SkillLevelUp_Request. */
    class SkillLevelUp_Request implements ISkillLevelUp_Request {

        /**
         * Constructs a new SkillLevelUp_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISkillLevelUp_Request);

        /** SkillLevelUp_Request heroId. */
        public heroId: string;

        /** SkillLevelUp_Request index. */
        public index: number;

        /**
         * Creates a new SkillLevelUp_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillLevelUp_Request instance
         */
        public static create(properties?: Protocol.ISkillLevelUp_Request): Protocol.SkillLevelUp_Request;

        /**
         * Encodes the specified SkillLevelUp_Request message. Does not implicitly {@link Protocol.SkillLevelUp_Request.verify|verify} messages.
         * @param message SkillLevelUp_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISkillLevelUp_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SkillLevelUp_Request message, length delimited. Does not implicitly {@link Protocol.SkillLevelUp_Request.verify|verify} messages.
         * @param message SkillLevelUp_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISkillLevelUp_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SkillLevelUp_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillLevelUp_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SkillLevelUp_Request;

        /**
         * Decodes a SkillLevelUp_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillLevelUp_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SkillLevelUp_Request;

        /**
         * Verifies a SkillLevelUp_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SkillLevelUp_Respond. */
    interface ISkillLevelUp_Respond {

        /** SkillLevelUp_Respond heroId */
        heroId?: (string|null);

        /** SkillLevelUp_Respond index */
        index?: (number|null);

        /** SkillLevelUp_Respond level */
        level?: (number|null);

        /** SkillLevelUp_Respond ret */
        ret?: (number|null);
    }

    /** Represents a SkillLevelUp_Respond. */
    class SkillLevelUp_Respond implements ISkillLevelUp_Respond {

        /**
         * Constructs a new SkillLevelUp_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISkillLevelUp_Respond);

        /** SkillLevelUp_Respond heroId. */
        public heroId: string;

        /** SkillLevelUp_Respond index. */
        public index: number;

        /** SkillLevelUp_Respond level. */
        public level: number;

        /** SkillLevelUp_Respond ret. */
        public ret: number;

        /**
         * Creates a new SkillLevelUp_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillLevelUp_Respond instance
         */
        public static create(properties?: Protocol.ISkillLevelUp_Respond): Protocol.SkillLevelUp_Respond;

        /**
         * Encodes the specified SkillLevelUp_Respond message. Does not implicitly {@link Protocol.SkillLevelUp_Respond.verify|verify} messages.
         * @param message SkillLevelUp_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISkillLevelUp_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SkillLevelUp_Respond message, length delimited. Does not implicitly {@link Protocol.SkillLevelUp_Respond.verify|verify} messages.
         * @param message SkillLevelUp_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISkillLevelUp_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SkillLevelUp_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillLevelUp_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SkillLevelUp_Respond;

        /**
         * Decodes a SkillLevelUp_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillLevelUp_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SkillLevelUp_Respond;

        /**
         * Verifies a SkillLevelUp_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AddHero_Respond. */
    interface IAddHero_Respond {

        /** AddHero_Respond hero */
        hero?: (Protocol.IHero|null);
    }

    /** Represents an AddHero_Respond. */
    class AddHero_Respond implements IAddHero_Respond {

        /**
         * Constructs a new AddHero_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAddHero_Respond);

        /** AddHero_Respond hero. */
        public hero?: (Protocol.IHero|null);

        /**
         * Creates a new AddHero_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddHero_Respond instance
         */
        public static create(properties?: Protocol.IAddHero_Respond): Protocol.AddHero_Respond;

        /**
         * Encodes the specified AddHero_Respond message. Does not implicitly {@link Protocol.AddHero_Respond.verify|verify} messages.
         * @param message AddHero_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAddHero_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AddHero_Respond message, length delimited. Does not implicitly {@link Protocol.AddHero_Respond.verify|verify} messages.
         * @param message AddHero_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAddHero_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AddHero_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddHero_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AddHero_Respond;

        /**
         * Decodes an AddHero_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddHero_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AddHero_Respond;

        /**
         * Verifies an AddHero_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FriendChat_Request. */
    interface IFriendChat_Request {

        /** FriendChat_Request content */
        content?: (string|null);

        /** FriendChat_Request roleId */
        roleId?: (number|Long|null);

        /** FriendChat_Request type */
        type?: (number|null);
    }

    /** Represents a FriendChat_Request. */
    class FriendChat_Request implements IFriendChat_Request {

        /**
         * Constructs a new FriendChat_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFriendChat_Request);

        /** FriendChat_Request content. */
        public content: string;

        /** FriendChat_Request roleId. */
        public roleId: (number|Long);

        /** FriendChat_Request type. */
        public type: number;

        /**
         * Creates a new FriendChat_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendChat_Request instance
         */
        public static create(properties?: Protocol.IFriendChat_Request): Protocol.FriendChat_Request;

        /**
         * Encodes the specified FriendChat_Request message. Does not implicitly {@link Protocol.FriendChat_Request.verify|verify} messages.
         * @param message FriendChat_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFriendChat_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendChat_Request message, length delimited. Does not implicitly {@link Protocol.FriendChat_Request.verify|verify} messages.
         * @param message FriendChat_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFriendChat_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendChat_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendChat_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FriendChat_Request;

        /**
         * Decodes a FriendChat_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendChat_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FriendChat_Request;

        /**
         * Verifies a FriendChat_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FriendChat_Respond. */
    interface IFriendChat_Respond {

        /** FriendChat_Respond msg */
        msg?: (Protocol.IChat|null);
    }

    /** Represents a FriendChat_Respond. */
    class FriendChat_Respond implements IFriendChat_Respond {

        /**
         * Constructs a new FriendChat_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFriendChat_Respond);

        /** FriendChat_Respond msg. */
        public msg?: (Protocol.IChat|null);

        /**
         * Creates a new FriendChat_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendChat_Respond instance
         */
        public static create(properties?: Protocol.IFriendChat_Respond): Protocol.FriendChat_Respond;

        /**
         * Encodes the specified FriendChat_Respond message. Does not implicitly {@link Protocol.FriendChat_Respond.verify|verify} messages.
         * @param message FriendChat_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFriendChat_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendChat_Respond message, length delimited. Does not implicitly {@link Protocol.FriendChat_Respond.verify|verify} messages.
         * @param message FriendChat_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFriendChat_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendChat_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendChat_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FriendChat_Respond;

        /**
         * Decodes a FriendChat_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendChat_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FriendChat_Respond;

        /**
         * Verifies a FriendChat_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an InviteFriend_Request. */
    interface IInviteFriend_Request {

        /** InviteFriend_Request roleId */
        roleId?: (number|Long|null);

        /** InviteFriend_Request serverId */
        serverId?: (number|null);
    }

    /** Represents an InviteFriend_Request. */
    class InviteFriend_Request implements IInviteFriend_Request {

        /**
         * Constructs a new InviteFriend_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IInviteFriend_Request);

        /** InviteFriend_Request roleId. */
        public roleId: (number|Long);

        /** InviteFriend_Request serverId. */
        public serverId: number;

        /**
         * Creates a new InviteFriend_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InviteFriend_Request instance
         */
        public static create(properties?: Protocol.IInviteFriend_Request): Protocol.InviteFriend_Request;

        /**
         * Encodes the specified InviteFriend_Request message. Does not implicitly {@link Protocol.InviteFriend_Request.verify|verify} messages.
         * @param message InviteFriend_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IInviteFriend_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified InviteFriend_Request message, length delimited. Does not implicitly {@link Protocol.InviteFriend_Request.verify|verify} messages.
         * @param message InviteFriend_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IInviteFriend_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an InviteFriend_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InviteFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.InviteFriend_Request;

        /**
         * Decodes an InviteFriend_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InviteFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.InviteFriend_Request;

        /**
         * Verifies an InviteFriend_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an InviteFriend_Respond. */
    interface IInviteFriend_Respond {

        /** InviteFriend_Respond from */
        from?: (Protocol.IInvite|null);
    }

    /** Represents an InviteFriend_Respond. */
    class InviteFriend_Respond implements IInviteFriend_Respond {

        /**
         * Constructs a new InviteFriend_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IInviteFriend_Respond);

        /** InviteFriend_Respond from. */
        public from?: (Protocol.IInvite|null);

        /**
         * Creates a new InviteFriend_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InviteFriend_Respond instance
         */
        public static create(properties?: Protocol.IInviteFriend_Respond): Protocol.InviteFriend_Respond;

        /**
         * Encodes the specified InviteFriend_Respond message. Does not implicitly {@link Protocol.InviteFriend_Respond.verify|verify} messages.
         * @param message InviteFriend_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IInviteFriend_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified InviteFriend_Respond message, length delimited. Does not implicitly {@link Protocol.InviteFriend_Respond.verify|verify} messages.
         * @param message InviteFriend_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IInviteFriend_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an InviteFriend_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InviteFriend_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.InviteFriend_Respond;

        /**
         * Decodes an InviteFriend_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InviteFriend_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.InviteFriend_Respond;

        /**
         * Verifies an InviteFriend_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AcceptFriend_Request. */
    interface IAcceptFriend_Request {

        /** AcceptFriend_Request roleId */
        roleId?: (number|Long|null);

        /** AcceptFriend_Request isAccept */
        isAccept?: (boolean|null);
    }

    /** Represents an AcceptFriend_Request. */
    class AcceptFriend_Request implements IAcceptFriend_Request {

        /**
         * Constructs a new AcceptFriend_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAcceptFriend_Request);

        /** AcceptFriend_Request roleId. */
        public roleId: (number|Long);

        /** AcceptFriend_Request isAccept. */
        public isAccept: boolean;

        /**
         * Creates a new AcceptFriend_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AcceptFriend_Request instance
         */
        public static create(properties?: Protocol.IAcceptFriend_Request): Protocol.AcceptFriend_Request;

        /**
         * Encodes the specified AcceptFriend_Request message. Does not implicitly {@link Protocol.AcceptFriend_Request.verify|verify} messages.
         * @param message AcceptFriend_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAcceptFriend_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AcceptFriend_Request message, length delimited. Does not implicitly {@link Protocol.AcceptFriend_Request.verify|verify} messages.
         * @param message AcceptFriend_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAcceptFriend_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AcceptFriend_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AcceptFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AcceptFriend_Request;

        /**
         * Decodes an AcceptFriend_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AcceptFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AcceptFriend_Request;

        /**
         * Verifies an AcceptFriend_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AddFriend_Respond. */
    interface IAddFriend_Respond {

        /** AddFriend_Respond newFd */
        newFd?: (Protocol.IFriend|null);
    }

    /** Represents an AddFriend_Respond. */
    class AddFriend_Respond implements IAddFriend_Respond {

        /**
         * Constructs a new AddFriend_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAddFriend_Respond);

        /** AddFriend_Respond newFd. */
        public newFd?: (Protocol.IFriend|null);

        /**
         * Creates a new AddFriend_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddFriend_Respond instance
         */
        public static create(properties?: Protocol.IAddFriend_Respond): Protocol.AddFriend_Respond;

        /**
         * Encodes the specified AddFriend_Respond message. Does not implicitly {@link Protocol.AddFriend_Respond.verify|verify} messages.
         * @param message AddFriend_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAddFriend_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AddFriend_Respond message, length delimited. Does not implicitly {@link Protocol.AddFriend_Respond.verify|verify} messages.
         * @param message AddFriend_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAddFriend_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AddFriend_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddFriend_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AddFriend_Respond;

        /**
         * Decodes an AddFriend_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddFriend_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AddFriend_Respond;

        /**
         * Verifies an AddFriend_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AskFrinedList_Request. */
    interface IAskFrinedList_Request {
    }

    /** Represents an AskFrinedList_Request. */
    class AskFrinedList_Request implements IAskFrinedList_Request {

        /**
         * Constructs a new AskFrinedList_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAskFrinedList_Request);

        /**
         * Creates a new AskFrinedList_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AskFrinedList_Request instance
         */
        public static create(properties?: Protocol.IAskFrinedList_Request): Protocol.AskFrinedList_Request;

        /**
         * Encodes the specified AskFrinedList_Request message. Does not implicitly {@link Protocol.AskFrinedList_Request.verify|verify} messages.
         * @param message AskFrinedList_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAskFrinedList_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AskFrinedList_Request message, length delimited. Does not implicitly {@link Protocol.AskFrinedList_Request.verify|verify} messages.
         * @param message AskFrinedList_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAskFrinedList_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AskFrinedList_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskFrinedList_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AskFrinedList_Request;

        /**
         * Decodes an AskFrinedList_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskFrinedList_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AskFrinedList_Request;

        /**
         * Verifies an AskFrinedList_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AskFriendList_Respond. */
    interface IAskFriendList_Respond {

        /** AskFriendList_Respond friends */
        friends?: (Protocol.IFriend[]|null);
    }

    /** Represents an AskFriendList_Respond. */
    class AskFriendList_Respond implements IAskFriendList_Respond {

        /**
         * Constructs a new AskFriendList_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAskFriendList_Respond);

        /** AskFriendList_Respond friends. */
        public friends: Protocol.IFriend[];

        /**
         * Creates a new AskFriendList_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AskFriendList_Respond instance
         */
        public static create(properties?: Protocol.IAskFriendList_Respond): Protocol.AskFriendList_Respond;

        /**
         * Encodes the specified AskFriendList_Respond message. Does not implicitly {@link Protocol.AskFriendList_Respond.verify|verify} messages.
         * @param message AskFriendList_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAskFriendList_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AskFriendList_Respond message, length delimited. Does not implicitly {@link Protocol.AskFriendList_Respond.verify|verify} messages.
         * @param message AskFriendList_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAskFriendList_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AskFriendList_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskFriendList_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AskFriendList_Respond;

        /**
         * Decodes an AskFriendList_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskFriendList_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AskFriendList_Respond;

        /**
         * Verifies an AskFriendList_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllFriends_Request. */
    interface IAllFriends_Request {
    }

    /** Represents an AllFriends_Request. */
    class AllFriends_Request implements IAllFriends_Request {

        /**
         * Constructs a new AllFriends_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAllFriends_Request);

        /**
         * Creates a new AllFriends_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllFriends_Request instance
         */
        public static create(properties?: Protocol.IAllFriends_Request): Protocol.AllFriends_Request;

        /**
         * Encodes the specified AllFriends_Request message. Does not implicitly {@link Protocol.AllFriends_Request.verify|verify} messages.
         * @param message AllFriends_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAllFriends_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllFriends_Request message, length delimited. Does not implicitly {@link Protocol.AllFriends_Request.verify|verify} messages.
         * @param message AllFriends_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAllFriends_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllFriends_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllFriends_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AllFriends_Request;

        /**
         * Decodes an AllFriends_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllFriends_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AllFriends_Request;

        /**
         * Verifies an AllFriends_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllFriends_Respond. */
    interface IAllFriends_Respond {

        /** AllFriends_Respond friends */
        friends?: (Protocol.IFriend[]|null);
    }

    /** Represents an AllFriends_Respond. */
    class AllFriends_Respond implements IAllFriends_Respond {

        /**
         * Constructs a new AllFriends_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAllFriends_Respond);

        /** AllFriends_Respond friends. */
        public friends: Protocol.IFriend[];

        /**
         * Creates a new AllFriends_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllFriends_Respond instance
         */
        public static create(properties?: Protocol.IAllFriends_Respond): Protocol.AllFriends_Respond;

        /**
         * Encodes the specified AllFriends_Respond message. Does not implicitly {@link Protocol.AllFriends_Respond.verify|verify} messages.
         * @param message AllFriends_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAllFriends_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllFriends_Respond message, length delimited. Does not implicitly {@link Protocol.AllFriends_Respond.verify|verify} messages.
         * @param message AllFriends_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAllFriends_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllFriends_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllFriends_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AllFriends_Respond;

        /**
         * Decodes an AllFriends_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllFriends_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AllFriends_Respond;

        /**
         * Verifies an AllFriends_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllInvite_Request. */
    interface IAllInvite_Request {
    }

    /** Represents an AllInvite_Request. */
    class AllInvite_Request implements IAllInvite_Request {

        /**
         * Constructs a new AllInvite_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAllInvite_Request);

        /**
         * Creates a new AllInvite_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllInvite_Request instance
         */
        public static create(properties?: Protocol.IAllInvite_Request): Protocol.AllInvite_Request;

        /**
         * Encodes the specified AllInvite_Request message. Does not implicitly {@link Protocol.AllInvite_Request.verify|verify} messages.
         * @param message AllInvite_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAllInvite_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllInvite_Request message, length delimited. Does not implicitly {@link Protocol.AllInvite_Request.verify|verify} messages.
         * @param message AllInvite_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAllInvite_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllInvite_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllInvite_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AllInvite_Request;

        /**
         * Decodes an AllInvite_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllInvite_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AllInvite_Request;

        /**
         * Verifies an AllInvite_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllInvites_Respond. */
    interface IAllInvites_Respond {

        /** AllInvites_Respond invites */
        invites?: (Protocol.IInvite[]|null);
    }

    /** Represents an AllInvites_Respond. */
    class AllInvites_Respond implements IAllInvites_Respond {

        /**
         * Constructs a new AllInvites_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAllInvites_Respond);

        /** AllInvites_Respond invites. */
        public invites: Protocol.IInvite[];

        /**
         * Creates a new AllInvites_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllInvites_Respond instance
         */
        public static create(properties?: Protocol.IAllInvites_Respond): Protocol.AllInvites_Respond;

        /**
         * Encodes the specified AllInvites_Respond message. Does not implicitly {@link Protocol.AllInvites_Respond.verify|verify} messages.
         * @param message AllInvites_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAllInvites_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllInvites_Respond message, length delimited. Does not implicitly {@link Protocol.AllInvites_Respond.verify|verify} messages.
         * @param message AllInvites_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAllInvites_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllInvites_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllInvites_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AllInvites_Respond;

        /**
         * Decodes an AllInvites_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllInvites_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AllInvites_Respond;

        /**
         * Verifies an AllInvites_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllChat_Request. */
    interface IAllChat_Request {

        /** AllChat_Request roleId */
        roleId?: (number|Long|null);
    }

    /** Represents an AllChat_Request. */
    class AllChat_Request implements IAllChat_Request {

        /**
         * Constructs a new AllChat_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAllChat_Request);

        /** AllChat_Request roleId. */
        public roleId: (number|Long);

        /**
         * Creates a new AllChat_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllChat_Request instance
         */
        public static create(properties?: Protocol.IAllChat_Request): Protocol.AllChat_Request;

        /**
         * Encodes the specified AllChat_Request message. Does not implicitly {@link Protocol.AllChat_Request.verify|verify} messages.
         * @param message AllChat_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAllChat_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllChat_Request message, length delimited. Does not implicitly {@link Protocol.AllChat_Request.verify|verify} messages.
         * @param message AllChat_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAllChat_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllChat_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllChat_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AllChat_Request;

        /**
         * Decodes an AllChat_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllChat_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AllChat_Request;

        /**
         * Verifies an AllChat_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllChat_Respond. */
    interface IAllChat_Respond {

        /** AllChat_Respond chats */
        chats?: (Protocol.IChat[]|null);

        /** AllChat_Respond roleId */
        roleId?: (number|Long|null);

        /** AllChat_Respond lastReadTime */
        lastReadTime?: (number|Long|null);
    }

    /** Represents an AllChat_Respond. */
    class AllChat_Respond implements IAllChat_Respond {

        /**
         * Constructs a new AllChat_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAllChat_Respond);

        /** AllChat_Respond chats. */
        public chats: Protocol.IChat[];

        /** AllChat_Respond roleId. */
        public roleId: (number|Long);

        /** AllChat_Respond lastReadTime. */
        public lastReadTime: (number|Long);

        /**
         * Creates a new AllChat_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllChat_Respond instance
         */
        public static create(properties?: Protocol.IAllChat_Respond): Protocol.AllChat_Respond;

        /**
         * Encodes the specified AllChat_Respond message. Does not implicitly {@link Protocol.AllChat_Respond.verify|verify} messages.
         * @param message AllChat_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAllChat_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllChat_Respond message, length delimited. Does not implicitly {@link Protocol.AllChat_Respond.verify|verify} messages.
         * @param message AllChat_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAllChat_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllChat_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllChat_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AllChat_Respond;

        /**
         * Decodes an AllChat_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllChat_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AllChat_Respond;

        /**
         * Verifies an AllChat_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FriendState_Respond. */
    interface IFriendState_Respond {

        /** FriendState_Respond roleId */
        roleId?: (number|Long|null);

        /** FriendState_Respond state */
        state?: (boolean|null);
    }

    /** Represents a FriendState_Respond. */
    class FriendState_Respond implements IFriendState_Respond {

        /**
         * Constructs a new FriendState_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFriendState_Respond);

        /** FriendState_Respond roleId. */
        public roleId: (number|Long);

        /** FriendState_Respond state. */
        public state: boolean;

        /**
         * Creates a new FriendState_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendState_Respond instance
         */
        public static create(properties?: Protocol.IFriendState_Respond): Protocol.FriendState_Respond;

        /**
         * Encodes the specified FriendState_Respond message. Does not implicitly {@link Protocol.FriendState_Respond.verify|verify} messages.
         * @param message FriendState_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFriendState_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendState_Respond message, length delimited. Does not implicitly {@link Protocol.FriendState_Respond.verify|verify} messages.
         * @param message FriendState_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFriendState_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendState_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendState_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FriendState_Respond;

        /**
         * Decodes a FriendState_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendState_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FriendState_Respond;

        /**
         * Verifies a FriendState_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeleteInvite_Respond. */
    interface IDeleteInvite_Respond {

        /** DeleteInvite_Respond roleId */
        roleId?: (number|Long|null);
    }

    /** Represents a DeleteInvite_Respond. */
    class DeleteInvite_Respond implements IDeleteInvite_Respond {

        /**
         * Constructs a new DeleteInvite_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IDeleteInvite_Respond);

        /** DeleteInvite_Respond roleId. */
        public roleId: (number|Long);

        /**
         * Creates a new DeleteInvite_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteInvite_Respond instance
         */
        public static create(properties?: Protocol.IDeleteInvite_Respond): Protocol.DeleteInvite_Respond;

        /**
         * Encodes the specified DeleteInvite_Respond message. Does not implicitly {@link Protocol.DeleteInvite_Respond.verify|verify} messages.
         * @param message DeleteInvite_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IDeleteInvite_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeleteInvite_Respond message, length delimited. Does not implicitly {@link Protocol.DeleteInvite_Respond.verify|verify} messages.
         * @param message DeleteInvite_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IDeleteInvite_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeleteInvite_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteInvite_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.DeleteInvite_Respond;

        /**
         * Decodes a DeleteInvite_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteInvite_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.DeleteInvite_Respond;

        /**
         * Verifies a DeleteInvite_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NoticeLastReadTime_Request. */
    interface INoticeLastReadTime_Request {

        /** NoticeLastReadTime_Request FrinedId */
        FrinedId?: (number|Long|null);
    }

    /** Represents a NoticeLastReadTime_Request. */
    class NoticeLastReadTime_Request implements INoticeLastReadTime_Request {

        /**
         * Constructs a new NoticeLastReadTime_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.INoticeLastReadTime_Request);

        /** NoticeLastReadTime_Request FrinedId. */
        public FrinedId: (number|Long);

        /**
         * Creates a new NoticeLastReadTime_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoticeLastReadTime_Request instance
         */
        public static create(properties?: Protocol.INoticeLastReadTime_Request): Protocol.NoticeLastReadTime_Request;

        /**
         * Encodes the specified NoticeLastReadTime_Request message. Does not implicitly {@link Protocol.NoticeLastReadTime_Request.verify|verify} messages.
         * @param message NoticeLastReadTime_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.INoticeLastReadTime_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NoticeLastReadTime_Request message, length delimited. Does not implicitly {@link Protocol.NoticeLastReadTime_Request.verify|verify} messages.
         * @param message NoticeLastReadTime_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.INoticeLastReadTime_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NoticeLastReadTime_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoticeLastReadTime_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.NoticeLastReadTime_Request;

        /**
         * Decodes a NoticeLastReadTime_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoticeLastReadTime_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.NoticeLastReadTime_Request;

        /**
         * Verifies a NoticeLastReadTime_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeleteFriend_Request. */
    interface IDeleteFriend_Request {

        /** DeleteFriend_Request roleId */
        roleId?: (number|Long|null);
    }

    /** Represents a DeleteFriend_Request. */
    class DeleteFriend_Request implements IDeleteFriend_Request {

        /**
         * Constructs a new DeleteFriend_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IDeleteFriend_Request);

        /** DeleteFriend_Request roleId. */
        public roleId: (number|Long);

        /**
         * Creates a new DeleteFriend_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteFriend_Request instance
         */
        public static create(properties?: Protocol.IDeleteFriend_Request): Protocol.DeleteFriend_Request;

        /**
         * Encodes the specified DeleteFriend_Request message. Does not implicitly {@link Protocol.DeleteFriend_Request.verify|verify} messages.
         * @param message DeleteFriend_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IDeleteFriend_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeleteFriend_Request message, length delimited. Does not implicitly {@link Protocol.DeleteFriend_Request.verify|verify} messages.
         * @param message DeleteFriend_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IDeleteFriend_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeleteFriend_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.DeleteFriend_Request;

        /**
         * Decodes a DeleteFriend_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteFriend_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.DeleteFriend_Request;

        /**
         * Verifies a DeleteFriend_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeleteFriend_Respond. */
    interface IDeleteFriend_Respond {

        /** DeleteFriend_Respond roleId */
        roleId?: (number|Long|null);
    }

    /** Represents a DeleteFriend_Respond. */
    class DeleteFriend_Respond implements IDeleteFriend_Respond {

        /**
         * Constructs a new DeleteFriend_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IDeleteFriend_Respond);

        /** DeleteFriend_Respond roleId. */
        public roleId: (number|Long);

        /**
         * Creates a new DeleteFriend_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteFriend_Respond instance
         */
        public static create(properties?: Protocol.IDeleteFriend_Respond): Protocol.DeleteFriend_Respond;

        /**
         * Encodes the specified DeleteFriend_Respond message. Does not implicitly {@link Protocol.DeleteFriend_Respond.verify|verify} messages.
         * @param message DeleteFriend_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IDeleteFriend_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeleteFriend_Respond message, length delimited. Does not implicitly {@link Protocol.DeleteFriend_Respond.verify|verify} messages.
         * @param message DeleteFriend_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IDeleteFriend_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeleteFriend_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteFriend_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.DeleteFriend_Respond;

        /**
         * Decodes a DeleteFriend_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteFriend_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.DeleteFriend_Respond;

        /**
         * Verifies a DeleteFriend_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AskFamily_Request. */
    interface IAskFamily_Request {
    }

    /** Represents an AskFamily_Request. */
    class AskFamily_Request implements IAskFamily_Request {

        /**
         * Constructs a new AskFamily_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAskFamily_Request);

        /**
         * Creates a new AskFamily_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AskFamily_Request instance
         */
        public static create(properties?: Protocol.IAskFamily_Request): Protocol.AskFamily_Request;

        /**
         * Encodes the specified AskFamily_Request message. Does not implicitly {@link Protocol.AskFamily_Request.verify|verify} messages.
         * @param message AskFamily_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAskFamily_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AskFamily_Request message, length delimited. Does not implicitly {@link Protocol.AskFamily_Request.verify|verify} messages.
         * @param message AskFamily_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAskFamily_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AskFamily_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskFamily_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AskFamily_Request;

        /**
         * Decodes an AskFamily_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskFamily_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AskFamily_Request;

        /**
         * Verifies an AskFamily_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AskFamily_Respond. */
    interface IAskFamily_Respond {

        /** AskFamily_Respond familys */
        familys?: (Protocol.IFamilyInfo[]|null);
    }

    /** Represents an AskFamily_Respond. */
    class AskFamily_Respond implements IAskFamily_Respond {

        /**
         * Constructs a new AskFamily_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAskFamily_Respond);

        /** AskFamily_Respond familys. */
        public familys: Protocol.IFamilyInfo[];

        /**
         * Creates a new AskFamily_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AskFamily_Respond instance
         */
        public static create(properties?: Protocol.IAskFamily_Respond): Protocol.AskFamily_Respond;

        /**
         * Encodes the specified AskFamily_Respond message. Does not implicitly {@link Protocol.AskFamily_Respond.verify|verify} messages.
         * @param message AskFamily_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAskFamily_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AskFamily_Respond message, length delimited. Does not implicitly {@link Protocol.AskFamily_Respond.verify|verify} messages.
         * @param message AskFamily_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAskFamily_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AskFamily_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskFamily_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AskFamily_Respond;

        /**
         * Decodes an AskFamily_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskFamily_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AskFamily_Respond;

        /**
         * Verifies an AskFamily_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CreateFamily_Request. */
    interface ICreateFamily_Request {

        /** CreateFamily_Request roleId */
        roleId?: (number|Long|null);

        /** CreateFamily_Request name */
        name?: (string|null);

        /** CreateFamily_Request pic */
        pic?: (number|null);

        /** CreateFamily_Request introduce */
        introduce?: (string|null);

        /** CreateFamily_Request autoCup */
        autoCup?: (number|null);

        /** CreateFamily_Request backGroup */
        backGroup?: (number|null);
    }

    /** Represents a CreateFamily_Request. */
    class CreateFamily_Request implements ICreateFamily_Request {

        /**
         * Constructs a new CreateFamily_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICreateFamily_Request);

        /** CreateFamily_Request roleId. */
        public roleId: (number|Long);

        /** CreateFamily_Request name. */
        public name: string;

        /** CreateFamily_Request pic. */
        public pic: number;

        /** CreateFamily_Request introduce. */
        public introduce: string;

        /** CreateFamily_Request autoCup. */
        public autoCup: number;

        /** CreateFamily_Request backGroup. */
        public backGroup: number;

        /**
         * Creates a new CreateFamily_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateFamily_Request instance
         */
        public static create(properties?: Protocol.ICreateFamily_Request): Protocol.CreateFamily_Request;

        /**
         * Encodes the specified CreateFamily_Request message. Does not implicitly {@link Protocol.CreateFamily_Request.verify|verify} messages.
         * @param message CreateFamily_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICreateFamily_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CreateFamily_Request message, length delimited. Does not implicitly {@link Protocol.CreateFamily_Request.verify|verify} messages.
         * @param message CreateFamily_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICreateFamily_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CreateFamily_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateFamily_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.CreateFamily_Request;

        /**
         * Decodes a CreateFamily_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateFamily_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.CreateFamily_Request;

        /**
         * Verifies a CreateFamily_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CreateFamily_Respond. */
    interface ICreateFamily_Respond {

        /** CreateFamily_Respond ret */
        ret?: (number|null);

        /** CreateFamily_Respond info */
        info?: (Protocol.IFamilyInfo|null);

        /** CreateFamily_Respond self */
        self?: (Protocol.IFamilyMember|null);
    }

    /** Represents a CreateFamily_Respond. */
    class CreateFamily_Respond implements ICreateFamily_Respond {

        /**
         * Constructs a new CreateFamily_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICreateFamily_Respond);

        /** CreateFamily_Respond ret. */
        public ret: number;

        /** CreateFamily_Respond info. */
        public info?: (Protocol.IFamilyInfo|null);

        /** CreateFamily_Respond self. */
        public self?: (Protocol.IFamilyMember|null);

        /**
         * Creates a new CreateFamily_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateFamily_Respond instance
         */
        public static create(properties?: Protocol.ICreateFamily_Respond): Protocol.CreateFamily_Respond;

        /**
         * Encodes the specified CreateFamily_Respond message. Does not implicitly {@link Protocol.CreateFamily_Respond.verify|verify} messages.
         * @param message CreateFamily_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICreateFamily_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CreateFamily_Respond message, length delimited. Does not implicitly {@link Protocol.CreateFamily_Respond.verify|verify} messages.
         * @param message CreateFamily_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICreateFamily_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CreateFamily_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateFamily_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.CreateFamily_Respond;

        /**
         * Decodes a CreateFamily_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateFamily_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.CreateFamily_Respond;

        /**
         * Verifies a CreateFamily_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a JoinFamily_Request. */
    interface IJoinFamily_Request {

        /** JoinFamily_Request familyId */
        familyId?: (string|null);
    }

    /** Represents a JoinFamily_Request. */
    class JoinFamily_Request implements IJoinFamily_Request {

        /**
         * Constructs a new JoinFamily_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IJoinFamily_Request);

        /** JoinFamily_Request familyId. */
        public familyId: string;

        /**
         * Creates a new JoinFamily_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinFamily_Request instance
         */
        public static create(properties?: Protocol.IJoinFamily_Request): Protocol.JoinFamily_Request;

        /**
         * Encodes the specified JoinFamily_Request message. Does not implicitly {@link Protocol.JoinFamily_Request.verify|verify} messages.
         * @param message JoinFamily_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IJoinFamily_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinFamily_Request message, length delimited. Does not implicitly {@link Protocol.JoinFamily_Request.verify|verify} messages.
         * @param message JoinFamily_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IJoinFamily_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinFamily_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinFamily_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.JoinFamily_Request;

        /**
         * Decodes a JoinFamily_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinFamily_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.JoinFamily_Request;

        /**
         * Verifies a JoinFamily_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a JoinFamily_Respond. */
    interface IJoinFamily_Respond {

        /** JoinFamily_Respond ret */
        ret?: (number|null);
    }

    /** Represents a JoinFamily_Respond. */
    class JoinFamily_Respond implements IJoinFamily_Respond {

        /**
         * Constructs a new JoinFamily_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IJoinFamily_Respond);

        /** JoinFamily_Respond ret. */
        public ret: number;

        /**
         * Creates a new JoinFamily_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinFamily_Respond instance
         */
        public static create(properties?: Protocol.IJoinFamily_Respond): Protocol.JoinFamily_Respond;

        /**
         * Encodes the specified JoinFamily_Respond message. Does not implicitly {@link Protocol.JoinFamily_Respond.verify|verify} messages.
         * @param message JoinFamily_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IJoinFamily_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinFamily_Respond message, length delimited. Does not implicitly {@link Protocol.JoinFamily_Respond.verify|verify} messages.
         * @param message JoinFamily_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IJoinFamily_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinFamily_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinFamily_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.JoinFamily_Respond;

        /**
         * Decodes a JoinFamily_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinFamily_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.JoinFamily_Respond;

        /**
         * Verifies a JoinFamily_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a JoInFamilySuceed_Respond. */
    interface IJoInFamilySuceed_Respond {

        /** JoInFamilySuceed_Respond info */
        info?: (Protocol.IFamilyInfo|null);

        /** JoInFamilySuceed_Respond members */
        members?: (Protocol.IFamilyMember[]|null);
    }

    /** Represents a JoInFamilySuceed_Respond. */
    class JoInFamilySuceed_Respond implements IJoInFamilySuceed_Respond {

        /**
         * Constructs a new JoInFamilySuceed_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IJoInFamilySuceed_Respond);

        /** JoInFamilySuceed_Respond info. */
        public info?: (Protocol.IFamilyInfo|null);

        /** JoInFamilySuceed_Respond members. */
        public members: Protocol.IFamilyMember[];

        /**
         * Creates a new JoInFamilySuceed_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoInFamilySuceed_Respond instance
         */
        public static create(properties?: Protocol.IJoInFamilySuceed_Respond): Protocol.JoInFamilySuceed_Respond;

        /**
         * Encodes the specified JoInFamilySuceed_Respond message. Does not implicitly {@link Protocol.JoInFamilySuceed_Respond.verify|verify} messages.
         * @param message JoInFamilySuceed_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IJoInFamilySuceed_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoInFamilySuceed_Respond message, length delimited. Does not implicitly {@link Protocol.JoInFamilySuceed_Respond.verify|verify} messages.
         * @param message JoInFamilySuceed_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IJoInFamilySuceed_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoInFamilySuceed_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoInFamilySuceed_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.JoInFamilySuceed_Respond;

        /**
         * Decodes a JoInFamilySuceed_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoInFamilySuceed_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.JoInFamilySuceed_Respond;

        /**
         * Verifies a JoInFamilySuceed_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a JoinApplys_Request. */
    interface IJoinApplys_Request {
    }

    /** Represents a JoinApplys_Request. */
    class JoinApplys_Request implements IJoinApplys_Request {

        /**
         * Constructs a new JoinApplys_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IJoinApplys_Request);

        /**
         * Creates a new JoinApplys_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinApplys_Request instance
         */
        public static create(properties?: Protocol.IJoinApplys_Request): Protocol.JoinApplys_Request;

        /**
         * Encodes the specified JoinApplys_Request message. Does not implicitly {@link Protocol.JoinApplys_Request.verify|verify} messages.
         * @param message JoinApplys_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IJoinApplys_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinApplys_Request message, length delimited. Does not implicitly {@link Protocol.JoinApplys_Request.verify|verify} messages.
         * @param message JoinApplys_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IJoinApplys_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinApplys_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinApplys_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.JoinApplys_Request;

        /**
         * Decodes a JoinApplys_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinApplys_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.JoinApplys_Request;

        /**
         * Verifies a JoinApplys_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a JoinApplys_Respond. */
    interface IJoinApplys_Respond {

        /** JoinApplys_Respond familyIds */
        familyIds?: (string[]|null);
    }

    /** Represents a JoinApplys_Respond. */
    class JoinApplys_Respond implements IJoinApplys_Respond {

        /**
         * Constructs a new JoinApplys_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IJoinApplys_Respond);

        /** JoinApplys_Respond familyIds. */
        public familyIds: string[];

        /**
         * Creates a new JoinApplys_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinApplys_Respond instance
         */
        public static create(properties?: Protocol.IJoinApplys_Respond): Protocol.JoinApplys_Respond;

        /**
         * Encodes the specified JoinApplys_Respond message. Does not implicitly {@link Protocol.JoinApplys_Respond.verify|verify} messages.
         * @param message JoinApplys_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IJoinApplys_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinApplys_Respond message, length delimited. Does not implicitly {@link Protocol.JoinApplys_Respond.verify|verify} messages.
         * @param message JoinApplys_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IJoinApplys_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinApplys_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinApplys_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.JoinApplys_Respond;

        /**
         * Decodes a JoinApplys_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinApplys_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.JoinApplys_Respond;

        /**
         * Verifies a JoinApplys_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LeaveFamily_Request. */
    interface ILeaveFamily_Request {

        /** LeaveFamily_Request familyId */
        familyId?: (string|null);
    }

    /** Represents a LeaveFamily_Request. */
    class LeaveFamily_Request implements ILeaveFamily_Request {

        /**
         * Constructs a new LeaveFamily_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ILeaveFamily_Request);

        /** LeaveFamily_Request familyId. */
        public familyId: string;

        /**
         * Creates a new LeaveFamily_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveFamily_Request instance
         */
        public static create(properties?: Protocol.ILeaveFamily_Request): Protocol.LeaveFamily_Request;

        /**
         * Encodes the specified LeaveFamily_Request message. Does not implicitly {@link Protocol.LeaveFamily_Request.verify|verify} messages.
         * @param message LeaveFamily_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ILeaveFamily_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LeaveFamily_Request message, length delimited. Does not implicitly {@link Protocol.LeaveFamily_Request.verify|verify} messages.
         * @param message LeaveFamily_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ILeaveFamily_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LeaveFamily_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveFamily_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.LeaveFamily_Request;

        /**
         * Decodes a LeaveFamily_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveFamily_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.LeaveFamily_Request;

        /**
         * Verifies a LeaveFamily_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a leaveFamily_Respond. */
    interface IleaveFamily_Respond {

        /** leaveFamily_Respond ret */
        ret?: (number|null);
    }

    /** Represents a leaveFamily_Respond. */
    class leaveFamily_Respond implements IleaveFamily_Respond {

        /**
         * Constructs a new leaveFamily_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IleaveFamily_Respond);

        /** leaveFamily_Respond ret. */
        public ret: number;

        /**
         * Creates a new leaveFamily_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns leaveFamily_Respond instance
         */
        public static create(properties?: Protocol.IleaveFamily_Respond): Protocol.leaveFamily_Respond;

        /**
         * Encodes the specified leaveFamily_Respond message. Does not implicitly {@link Protocol.leaveFamily_Respond.verify|verify} messages.
         * @param message leaveFamily_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IleaveFamily_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified leaveFamily_Respond message, length delimited. Does not implicitly {@link Protocol.leaveFamily_Respond.verify|verify} messages.
         * @param message leaveFamily_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IleaveFamily_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a leaveFamily_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns leaveFamily_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.leaveFamily_Respond;

        /**
         * Decodes a leaveFamily_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns leaveFamily_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.leaveFamily_Respond;

        /**
         * Verifies a leaveFamily_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AskFamilyApply_Request. */
    interface IAskFamilyApply_Request {
    }

    /** Represents an AskFamilyApply_Request. */
    class AskFamilyApply_Request implements IAskFamilyApply_Request {

        /**
         * Constructs a new AskFamilyApply_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAskFamilyApply_Request);

        /**
         * Creates a new AskFamilyApply_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AskFamilyApply_Request instance
         */
        public static create(properties?: Protocol.IAskFamilyApply_Request): Protocol.AskFamilyApply_Request;

        /**
         * Encodes the specified AskFamilyApply_Request message. Does not implicitly {@link Protocol.AskFamilyApply_Request.verify|verify} messages.
         * @param message AskFamilyApply_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAskFamilyApply_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AskFamilyApply_Request message, length delimited. Does not implicitly {@link Protocol.AskFamilyApply_Request.verify|verify} messages.
         * @param message AskFamilyApply_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAskFamilyApply_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AskFamilyApply_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskFamilyApply_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AskFamilyApply_Request;

        /**
         * Decodes an AskFamilyApply_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskFamilyApply_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AskFamilyApply_Request;

        /**
         * Verifies an AskFamilyApply_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AskFamilyApply_Respond. */
    interface IAskFamilyApply_Respond {

        /** AskFamilyApply_Respond applys */
        applys?: (Protocol.IFamilyMember[]|null);
    }

    /** Represents an AskFamilyApply_Respond. */
    class AskFamilyApply_Respond implements IAskFamilyApply_Respond {

        /**
         * Constructs a new AskFamilyApply_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAskFamilyApply_Respond);

        /** AskFamilyApply_Respond applys. */
        public applys: Protocol.IFamilyMember[];

        /**
         * Creates a new AskFamilyApply_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AskFamilyApply_Respond instance
         */
        public static create(properties?: Protocol.IAskFamilyApply_Respond): Protocol.AskFamilyApply_Respond;

        /**
         * Encodes the specified AskFamilyApply_Respond message. Does not implicitly {@link Protocol.AskFamilyApply_Respond.verify|verify} messages.
         * @param message AskFamilyApply_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAskFamilyApply_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AskFamilyApply_Respond message, length delimited. Does not implicitly {@link Protocol.AskFamilyApply_Respond.verify|verify} messages.
         * @param message AskFamilyApply_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAskFamilyApply_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AskFamilyApply_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskFamilyApply_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AskFamilyApply_Respond;

        /**
         * Decodes an AskFamilyApply_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskFamilyApply_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AskFamilyApply_Respond;

        /**
         * Verifies an AskFamilyApply_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AcceptFamilyApply_Request. */
    interface IAcceptFamilyApply_Request {

        /** AcceptFamilyApply_Request roleId */
        roleId?: (number|Long|null);

        /** AcceptFamilyApply_Request accept */
        accept?: (boolean|null);
    }

    /** Represents an AcceptFamilyApply_Request. */
    class AcceptFamilyApply_Request implements IAcceptFamilyApply_Request {

        /**
         * Constructs a new AcceptFamilyApply_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAcceptFamilyApply_Request);

        /** AcceptFamilyApply_Request roleId. */
        public roleId: (number|Long);

        /** AcceptFamilyApply_Request accept. */
        public accept: boolean;

        /**
         * Creates a new AcceptFamilyApply_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AcceptFamilyApply_Request instance
         */
        public static create(properties?: Protocol.IAcceptFamilyApply_Request): Protocol.AcceptFamilyApply_Request;

        /**
         * Encodes the specified AcceptFamilyApply_Request message. Does not implicitly {@link Protocol.AcceptFamilyApply_Request.verify|verify} messages.
         * @param message AcceptFamilyApply_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAcceptFamilyApply_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AcceptFamilyApply_Request message, length delimited. Does not implicitly {@link Protocol.AcceptFamilyApply_Request.verify|verify} messages.
         * @param message AcceptFamilyApply_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAcceptFamilyApply_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AcceptFamilyApply_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AcceptFamilyApply_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AcceptFamilyApply_Request;

        /**
         * Decodes an AcceptFamilyApply_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AcceptFamilyApply_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AcceptFamilyApply_Request;

        /**
         * Verifies an AcceptFamilyApply_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AcceptFamilyApply_Respond. */
    interface IAcceptFamilyApply_Respond {

        /** AcceptFamilyApply_Respond ret */
        ret?: (number|null);
    }

    /** Represents an AcceptFamilyApply_Respond. */
    class AcceptFamilyApply_Respond implements IAcceptFamilyApply_Respond {

        /**
         * Constructs a new AcceptFamilyApply_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAcceptFamilyApply_Respond);

        /** AcceptFamilyApply_Respond ret. */
        public ret: number;

        /**
         * Creates a new AcceptFamilyApply_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AcceptFamilyApply_Respond instance
         */
        public static create(properties?: Protocol.IAcceptFamilyApply_Respond): Protocol.AcceptFamilyApply_Respond;

        /**
         * Encodes the specified AcceptFamilyApply_Respond message. Does not implicitly {@link Protocol.AcceptFamilyApply_Respond.verify|verify} messages.
         * @param message AcceptFamilyApply_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAcceptFamilyApply_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AcceptFamilyApply_Respond message, length delimited. Does not implicitly {@link Protocol.AcceptFamilyApply_Respond.verify|verify} messages.
         * @param message AcceptFamilyApply_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAcceptFamilyApply_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AcceptFamilyApply_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AcceptFamilyApply_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AcceptFamilyApply_Respond;

        /**
         * Decodes an AcceptFamilyApply_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AcceptFamilyApply_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AcceptFamilyApply_Respond;

        /**
         * Verifies an AcceptFamilyApply_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FamilyInfo_Request. */
    interface IFamilyInfo_Request {

        /** FamilyInfo_Request familyId */
        familyId?: (string|null);
    }

    /** Represents a FamilyInfo_Request. */
    class FamilyInfo_Request implements IFamilyInfo_Request {

        /**
         * Constructs a new FamilyInfo_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFamilyInfo_Request);

        /** FamilyInfo_Request familyId. */
        public familyId: string;

        /**
         * Creates a new FamilyInfo_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FamilyInfo_Request instance
         */
        public static create(properties?: Protocol.IFamilyInfo_Request): Protocol.FamilyInfo_Request;

        /**
         * Encodes the specified FamilyInfo_Request message. Does not implicitly {@link Protocol.FamilyInfo_Request.verify|verify} messages.
         * @param message FamilyInfo_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFamilyInfo_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FamilyInfo_Request message, length delimited. Does not implicitly {@link Protocol.FamilyInfo_Request.verify|verify} messages.
         * @param message FamilyInfo_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFamilyInfo_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FamilyInfo_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FamilyInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FamilyInfo_Request;

        /**
         * Decodes a FamilyInfo_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FamilyInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FamilyInfo_Request;

        /**
         * Verifies a FamilyInfo_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FamilyInfo_Respond. */
    interface IFamilyInfo_Respond {

        /** FamilyInfo_Respond info */
        info?: (Protocol.IFamilyInfo|null);

        /** FamilyInfo_Respond members */
        members?: (Protocol.IFamilyMember[]|null);
    }

    /** Represents a FamilyInfo_Respond. */
    class FamilyInfo_Respond implements IFamilyInfo_Respond {

        /**
         * Constructs a new FamilyInfo_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFamilyInfo_Respond);

        /** FamilyInfo_Respond info. */
        public info?: (Protocol.IFamilyInfo|null);

        /** FamilyInfo_Respond members. */
        public members: Protocol.IFamilyMember[];

        /**
         * Creates a new FamilyInfo_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FamilyInfo_Respond instance
         */
        public static create(properties?: Protocol.IFamilyInfo_Respond): Protocol.FamilyInfo_Respond;

        /**
         * Encodes the specified FamilyInfo_Respond message. Does not implicitly {@link Protocol.FamilyInfo_Respond.verify|verify} messages.
         * @param message FamilyInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFamilyInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FamilyInfo_Respond message, length delimited. Does not implicitly {@link Protocol.FamilyInfo_Respond.verify|verify} messages.
         * @param message FamilyInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFamilyInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FamilyInfo_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FamilyInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FamilyInfo_Respond;

        /**
         * Decodes a FamilyInfo_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FamilyInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FamilyInfo_Respond;

        /**
         * Verifies a FamilyInfo_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FamilyChats_Request. */
    interface IFamilyChats_Request {
    }

    /** Represents a FamilyChats_Request. */
    class FamilyChats_Request implements IFamilyChats_Request {

        /**
         * Constructs a new FamilyChats_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFamilyChats_Request);

        /**
         * Creates a new FamilyChats_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FamilyChats_Request instance
         */
        public static create(properties?: Protocol.IFamilyChats_Request): Protocol.FamilyChats_Request;

        /**
         * Encodes the specified FamilyChats_Request message. Does not implicitly {@link Protocol.FamilyChats_Request.verify|verify} messages.
         * @param message FamilyChats_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFamilyChats_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FamilyChats_Request message, length delimited. Does not implicitly {@link Protocol.FamilyChats_Request.verify|verify} messages.
         * @param message FamilyChats_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFamilyChats_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FamilyChats_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FamilyChats_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FamilyChats_Request;

        /**
         * Decodes a FamilyChats_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FamilyChats_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FamilyChats_Request;

        /**
         * Verifies a FamilyChats_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FamilyChats_Respond. */
    interface IFamilyChats_Respond {

        /** FamilyChats_Respond chats */
        chats?: (Protocol.IFamilyChat[]|null);
    }

    /** Represents a FamilyChats_Respond. */
    class FamilyChats_Respond implements IFamilyChats_Respond {

        /**
         * Constructs a new FamilyChats_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFamilyChats_Respond);

        /** FamilyChats_Respond chats. */
        public chats: Protocol.IFamilyChat[];

        /**
         * Creates a new FamilyChats_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FamilyChats_Respond instance
         */
        public static create(properties?: Protocol.IFamilyChats_Respond): Protocol.FamilyChats_Respond;

        /**
         * Encodes the specified FamilyChats_Respond message. Does not implicitly {@link Protocol.FamilyChats_Respond.verify|verify} messages.
         * @param message FamilyChats_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFamilyChats_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FamilyChats_Respond message, length delimited. Does not implicitly {@link Protocol.FamilyChats_Respond.verify|verify} messages.
         * @param message FamilyChats_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFamilyChats_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FamilyChats_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FamilyChats_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FamilyChats_Respond;

        /**
         * Decodes a FamilyChats_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FamilyChats_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FamilyChats_Respond;

        /**
         * Verifies a FamilyChats_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SendFamilyChat_Request. */
    interface ISendFamilyChat_Request {

        /** SendFamilyChat_Request content */
        content?: (string|null);

        /** SendFamilyChat_Request type */
        type?: (number|null);
    }

    /** Represents a SendFamilyChat_Request. */
    class SendFamilyChat_Request implements ISendFamilyChat_Request {

        /**
         * Constructs a new SendFamilyChat_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISendFamilyChat_Request);

        /** SendFamilyChat_Request content. */
        public content: string;

        /** SendFamilyChat_Request type. */
        public type: number;

        /**
         * Creates a new SendFamilyChat_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendFamilyChat_Request instance
         */
        public static create(properties?: Protocol.ISendFamilyChat_Request): Protocol.SendFamilyChat_Request;

        /**
         * Encodes the specified SendFamilyChat_Request message. Does not implicitly {@link Protocol.SendFamilyChat_Request.verify|verify} messages.
         * @param message SendFamilyChat_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISendFamilyChat_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SendFamilyChat_Request message, length delimited. Does not implicitly {@link Protocol.SendFamilyChat_Request.verify|verify} messages.
         * @param message SendFamilyChat_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISendFamilyChat_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SendFamilyChat_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendFamilyChat_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SendFamilyChat_Request;

        /**
         * Decodes a SendFamilyChat_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendFamilyChat_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SendFamilyChat_Request;

        /**
         * Verifies a SendFamilyChat_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SendFamilyChat_Respond. */
    interface ISendFamilyChat_Respond {

        /** SendFamilyChat_Respond chat */
        chat?: (Protocol.IFamilyChat|null);
    }

    /** Represents a SendFamilyChat_Respond. */
    class SendFamilyChat_Respond implements ISendFamilyChat_Respond {

        /**
         * Constructs a new SendFamilyChat_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISendFamilyChat_Respond);

        /** SendFamilyChat_Respond chat. */
        public chat?: (Protocol.IFamilyChat|null);

        /**
         * Creates a new SendFamilyChat_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendFamilyChat_Respond instance
         */
        public static create(properties?: Protocol.ISendFamilyChat_Respond): Protocol.SendFamilyChat_Respond;

        /**
         * Encodes the specified SendFamilyChat_Respond message. Does not implicitly {@link Protocol.SendFamilyChat_Respond.verify|verify} messages.
         * @param message SendFamilyChat_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISendFamilyChat_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SendFamilyChat_Respond message, length delimited. Does not implicitly {@link Protocol.SendFamilyChat_Respond.verify|verify} messages.
         * @param message SendFamilyChat_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISendFamilyChat_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SendFamilyChat_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendFamilyChat_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SendFamilyChat_Respond;

        /**
         * Decodes a SendFamilyChat_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendFamilyChat_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SendFamilyChat_Respond;

        /**
         * Verifies a SendFamilyChat_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SearchFamily_Request. */
    interface ISearchFamily_Request {

        /** SearchFamily_Request name */
        name?: (string|null);
    }

    /** Represents a SearchFamily_Request. */
    class SearchFamily_Request implements ISearchFamily_Request {

        /**
         * Constructs a new SearchFamily_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISearchFamily_Request);

        /** SearchFamily_Request name. */
        public name: string;

        /**
         * Creates a new SearchFamily_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchFamily_Request instance
         */
        public static create(properties?: Protocol.ISearchFamily_Request): Protocol.SearchFamily_Request;

        /**
         * Encodes the specified SearchFamily_Request message. Does not implicitly {@link Protocol.SearchFamily_Request.verify|verify} messages.
         * @param message SearchFamily_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISearchFamily_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SearchFamily_Request message, length delimited. Does not implicitly {@link Protocol.SearchFamily_Request.verify|verify} messages.
         * @param message SearchFamily_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISearchFamily_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SearchFamily_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchFamily_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SearchFamily_Request;

        /**
         * Decodes a SearchFamily_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchFamily_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SearchFamily_Request;

        /**
         * Verifies a SearchFamily_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NoticeMemberChange_Respond. */
    interface INoticeMemberChange_Respond {

        /** NoticeMemberChange_Respond member */
        member?: (Protocol.IFamilyMember[]|null);
    }

    /** Represents a NoticeMemberChange_Respond. */
    class NoticeMemberChange_Respond implements INoticeMemberChange_Respond {

        /**
         * Constructs a new NoticeMemberChange_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.INoticeMemberChange_Respond);

        /** NoticeMemberChange_Respond member. */
        public member: Protocol.IFamilyMember[];

        /**
         * Creates a new NoticeMemberChange_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoticeMemberChange_Respond instance
         */
        public static create(properties?: Protocol.INoticeMemberChange_Respond): Protocol.NoticeMemberChange_Respond;

        /**
         * Encodes the specified NoticeMemberChange_Respond message. Does not implicitly {@link Protocol.NoticeMemberChange_Respond.verify|verify} messages.
         * @param message NoticeMemberChange_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.INoticeMemberChange_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NoticeMemberChange_Respond message, length delimited. Does not implicitly {@link Protocol.NoticeMemberChange_Respond.verify|verify} messages.
         * @param message NoticeMemberChange_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.INoticeMemberChange_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NoticeMemberChange_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoticeMemberChange_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.NoticeMemberChange_Respond;

        /**
         * Decodes a NoticeMemberChange_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoticeMemberChange_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.NoticeMemberChange_Respond;

        /**
         * Verifies a NoticeMemberChange_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SetFamilyJob_Request. */
    interface ISetFamilyJob_Request {

        /** SetFamilyJob_Request roleId */
        roleId?: (number|Long|null);

        /** SetFamilyJob_Request job */
        job?: (number|null);
    }

    /** Represents a SetFamilyJob_Request. */
    class SetFamilyJob_Request implements ISetFamilyJob_Request {

        /**
         * Constructs a new SetFamilyJob_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISetFamilyJob_Request);

        /** SetFamilyJob_Request roleId. */
        public roleId: (number|Long);

        /** SetFamilyJob_Request job. */
        public job: number;

        /**
         * Creates a new SetFamilyJob_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetFamilyJob_Request instance
         */
        public static create(properties?: Protocol.ISetFamilyJob_Request): Protocol.SetFamilyJob_Request;

        /**
         * Encodes the specified SetFamilyJob_Request message. Does not implicitly {@link Protocol.SetFamilyJob_Request.verify|verify} messages.
         * @param message SetFamilyJob_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISetFamilyJob_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SetFamilyJob_Request message, length delimited. Does not implicitly {@link Protocol.SetFamilyJob_Request.verify|verify} messages.
         * @param message SetFamilyJob_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISetFamilyJob_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SetFamilyJob_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetFamilyJob_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SetFamilyJob_Request;

        /**
         * Decodes a SetFamilyJob_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetFamilyJob_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SetFamilyJob_Request;

        /**
         * Verifies a SetFamilyJob_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SetFamilyJob_Respond. */
    interface ISetFamilyJob_Respond {

        /** SetFamilyJob_Respond ret */
        ret?: (number|null);

        /** SetFamilyJob_Respond roleId */
        roleId?: (number|Long|null);

        /** SetFamilyJob_Respond job */
        job?: (number|null);
    }

    /** Represents a SetFamilyJob_Respond. */
    class SetFamilyJob_Respond implements ISetFamilyJob_Respond {

        /**
         * Constructs a new SetFamilyJob_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISetFamilyJob_Respond);

        /** SetFamilyJob_Respond ret. */
        public ret: number;

        /** SetFamilyJob_Respond roleId. */
        public roleId: (number|Long);

        /** SetFamilyJob_Respond job. */
        public job: number;

        /**
         * Creates a new SetFamilyJob_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetFamilyJob_Respond instance
         */
        public static create(properties?: Protocol.ISetFamilyJob_Respond): Protocol.SetFamilyJob_Respond;

        /**
         * Encodes the specified SetFamilyJob_Respond message. Does not implicitly {@link Protocol.SetFamilyJob_Respond.verify|verify} messages.
         * @param message SetFamilyJob_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISetFamilyJob_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SetFamilyJob_Respond message, length delimited. Does not implicitly {@link Protocol.SetFamilyJob_Respond.verify|verify} messages.
         * @param message SetFamilyJob_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISetFamilyJob_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SetFamilyJob_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetFamilyJob_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SetFamilyJob_Respond;

        /**
         * Decodes a SetFamilyJob_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetFamilyJob_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SetFamilyJob_Respond;

        /**
         * Verifies a SetFamilyJob_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TickFamilyMember_Request. */
    interface ITickFamilyMember_Request {

        /** TickFamilyMember_Request roleId */
        roleId?: (number|Long|null);
    }

    /** Represents a TickFamilyMember_Request. */
    class TickFamilyMember_Request implements ITickFamilyMember_Request {

        /**
         * Constructs a new TickFamilyMember_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ITickFamilyMember_Request);

        /** TickFamilyMember_Request roleId. */
        public roleId: (number|Long);

        /**
         * Creates a new TickFamilyMember_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TickFamilyMember_Request instance
         */
        public static create(properties?: Protocol.ITickFamilyMember_Request): Protocol.TickFamilyMember_Request;

        /**
         * Encodes the specified TickFamilyMember_Request message. Does not implicitly {@link Protocol.TickFamilyMember_Request.verify|verify} messages.
         * @param message TickFamilyMember_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ITickFamilyMember_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TickFamilyMember_Request message, length delimited. Does not implicitly {@link Protocol.TickFamilyMember_Request.verify|verify} messages.
         * @param message TickFamilyMember_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ITickFamilyMember_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TickFamilyMember_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TickFamilyMember_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.TickFamilyMember_Request;

        /**
         * Decodes a TickFamilyMember_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TickFamilyMember_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.TickFamilyMember_Request;

        /**
         * Verifies a TickFamilyMember_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TickFamilyMember_Respond. */
    interface ITickFamilyMember_Respond {

        /** TickFamilyMember_Respond ret */
        ret?: (number|null);

        /** TickFamilyMember_Respond memberId */
        memberId?: (number|Long|null);
    }

    /** Represents a TickFamilyMember_Respond. */
    class TickFamilyMember_Respond implements ITickFamilyMember_Respond {

        /**
         * Constructs a new TickFamilyMember_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ITickFamilyMember_Respond);

        /** TickFamilyMember_Respond ret. */
        public ret: number;

        /** TickFamilyMember_Respond memberId. */
        public memberId: (number|Long);

        /**
         * Creates a new TickFamilyMember_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TickFamilyMember_Respond instance
         */
        public static create(properties?: Protocol.ITickFamilyMember_Respond): Protocol.TickFamilyMember_Respond;

        /**
         * Encodes the specified TickFamilyMember_Respond message. Does not implicitly {@link Protocol.TickFamilyMember_Respond.verify|verify} messages.
         * @param message TickFamilyMember_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ITickFamilyMember_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TickFamilyMember_Respond message, length delimited. Does not implicitly {@link Protocol.TickFamilyMember_Respond.verify|verify} messages.
         * @param message TickFamilyMember_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ITickFamilyMember_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TickFamilyMember_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TickFamilyMember_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.TickFamilyMember_Respond;

        /**
         * Decodes a TickFamilyMember_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TickFamilyMember_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.TickFamilyMember_Respond;

        /**
         * Verifies a TickFamilyMember_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyTreasure_Request. */
    interface IBuyTreasure_Request {

        /** BuyTreasure_Request treasureId */
        treasureId?: (number|null);
    }

    /** Represents a BuyTreasure_Request. */
    class BuyTreasure_Request implements IBuyTreasure_Request {

        /**
         * Constructs a new BuyTreasure_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyTreasure_Request);

        /** BuyTreasure_Request treasureId. */
        public treasureId: number;

        /**
         * Creates a new BuyTreasure_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyTreasure_Request instance
         */
        public static create(properties?: Protocol.IBuyTreasure_Request): Protocol.BuyTreasure_Request;

        /**
         * Encodes the specified BuyTreasure_Request message. Does not implicitly {@link Protocol.BuyTreasure_Request.verify|verify} messages.
         * @param message BuyTreasure_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyTreasure_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyTreasure_Request message, length delimited. Does not implicitly {@link Protocol.BuyTreasure_Request.verify|verify} messages.
         * @param message BuyTreasure_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyTreasure_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyTreasure_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyTreasure_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyTreasure_Request;

        /**
         * Decodes a BuyTreasure_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyTreasure_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyTreasure_Request;

        /**
         * Verifies a BuyTreasure_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyTreasure_Respond. */
    interface IBuyTreasure_Respond {

        /** BuyTreasure_Respond ret */
        ret?: (number|null);

        /** BuyTreasure_Respond treasureId */
        treasureId?: (number|null);
    }

    /** Represents a BuyTreasure_Respond. */
    class BuyTreasure_Respond implements IBuyTreasure_Respond {

        /**
         * Constructs a new BuyTreasure_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyTreasure_Respond);

        /** BuyTreasure_Respond ret. */
        public ret: number;

        /** BuyTreasure_Respond treasureId. */
        public treasureId: number;

        /**
         * Creates a new BuyTreasure_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyTreasure_Respond instance
         */
        public static create(properties?: Protocol.IBuyTreasure_Respond): Protocol.BuyTreasure_Respond;

        /**
         * Encodes the specified BuyTreasure_Respond message. Does not implicitly {@link Protocol.BuyTreasure_Respond.verify|verify} messages.
         * @param message BuyTreasure_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyTreasure_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyTreasure_Respond message, length delimited. Does not implicitly {@link Protocol.BuyTreasure_Respond.verify|verify} messages.
         * @param message BuyTreasure_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyTreasure_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyTreasure_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyTreasure_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyTreasure_Respond;

        /**
         * Decodes a BuyTreasure_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyTreasure_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyTreasure_Respond;

        /**
         * Verifies a BuyTreasure_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyTreasureInfo_Request. */
    interface IBuyTreasureInfo_Request {
    }

    /** Represents a BuyTreasureInfo_Request. */
    class BuyTreasureInfo_Request implements IBuyTreasureInfo_Request {

        /**
         * Constructs a new BuyTreasureInfo_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyTreasureInfo_Request);

        /**
         * Creates a new BuyTreasureInfo_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyTreasureInfo_Request instance
         */
        public static create(properties?: Protocol.IBuyTreasureInfo_Request): Protocol.BuyTreasureInfo_Request;

        /**
         * Encodes the specified BuyTreasureInfo_Request message. Does not implicitly {@link Protocol.BuyTreasureInfo_Request.verify|verify} messages.
         * @param message BuyTreasureInfo_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyTreasureInfo_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyTreasureInfo_Request message, length delimited. Does not implicitly {@link Protocol.BuyTreasureInfo_Request.verify|verify} messages.
         * @param message BuyTreasureInfo_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyTreasureInfo_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyTreasureInfo_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyTreasureInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyTreasureInfo_Request;

        /**
         * Decodes a BuyTreasureInfo_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyTreasureInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyTreasureInfo_Request;

        /**
         * Verifies a BuyTreasureInfo_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyTreasureInfo_Respond. */
    interface IBuyTreasureInfo_Respond {

        /** BuyTreasureInfo_Respond infos */
        infos?: (Protocol.IBuyInfo[]|null);
    }

    /** Represents a BuyTreasureInfo_Respond. */
    class BuyTreasureInfo_Respond implements IBuyTreasureInfo_Respond {

        /**
         * Constructs a new BuyTreasureInfo_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyTreasureInfo_Respond);

        /** BuyTreasureInfo_Respond infos. */
        public infos: Protocol.IBuyInfo[];

        /**
         * Creates a new BuyTreasureInfo_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyTreasureInfo_Respond instance
         */
        public static create(properties?: Protocol.IBuyTreasureInfo_Respond): Protocol.BuyTreasureInfo_Respond;

        /**
         * Encodes the specified BuyTreasureInfo_Respond message. Does not implicitly {@link Protocol.BuyTreasureInfo_Respond.verify|verify} messages.
         * @param message BuyTreasureInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyTreasureInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyTreasureInfo_Respond message, length delimited. Does not implicitly {@link Protocol.BuyTreasureInfo_Respond.verify|verify} messages.
         * @param message BuyTreasureInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyTreasureInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyTreasureInfo_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyTreasureInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyTreasureInfo_Respond;

        /**
         * Decodes a BuyTreasureInfo_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyTreasureInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyTreasureInfo_Respond;

        /**
         * Verifies a BuyTreasureInfo_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BattleReward_Respond. */
    interface IBattleReward_Respond {

        /** BattleReward_Respond cups */
        cups?: (number|null);

        /** BattleReward_Respond winType */
        winType?: (number|null);

        /** BattleReward_Respond rewards */
        rewards?: (Protocol.IReward[]|null);
    }

    /** Represents a BattleReward_Respond. */
    class BattleReward_Respond implements IBattleReward_Respond {

        /**
         * Constructs a new BattleReward_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBattleReward_Respond);

        /** BattleReward_Respond cups. */
        public cups: number;

        /** BattleReward_Respond winType. */
        public winType: number;

        /** BattleReward_Respond rewards. */
        public rewards: Protocol.IReward[];

        /**
         * Creates a new BattleReward_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleReward_Respond instance
         */
        public static create(properties?: Protocol.IBattleReward_Respond): Protocol.BattleReward_Respond;

        /**
         * Encodes the specified BattleReward_Respond message. Does not implicitly {@link Protocol.BattleReward_Respond.verify|verify} messages.
         * @param message BattleReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBattleReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BattleReward_Respond message, length delimited. Does not implicitly {@link Protocol.BattleReward_Respond.verify|verify} messages.
         * @param message BattleReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBattleReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BattleReward_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BattleReward_Respond;

        /**
         * Decodes a BattleReward_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BattleReward_Respond;

        /**
         * Verifies a BattleReward_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SimpleRecord_Request. */
    interface ISimpleRecord_Request {
    }

    /** Represents a SimpleRecord_Request. */
    class SimpleRecord_Request implements ISimpleRecord_Request {

        /**
         * Constructs a new SimpleRecord_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISimpleRecord_Request);

        /**
         * Creates a new SimpleRecord_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SimpleRecord_Request instance
         */
        public static create(properties?: Protocol.ISimpleRecord_Request): Protocol.SimpleRecord_Request;

        /**
         * Encodes the specified SimpleRecord_Request message. Does not implicitly {@link Protocol.SimpleRecord_Request.verify|verify} messages.
         * @param message SimpleRecord_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISimpleRecord_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SimpleRecord_Request message, length delimited. Does not implicitly {@link Protocol.SimpleRecord_Request.verify|verify} messages.
         * @param message SimpleRecord_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISimpleRecord_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SimpleRecord_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SimpleRecord_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SimpleRecord_Request;

        /**
         * Decodes a SimpleRecord_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SimpleRecord_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SimpleRecord_Request;

        /**
         * Verifies a SimpleRecord_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SimpleRecord_Respond. */
    interface ISimpleRecord_Respond {

        /** SimpleRecord_Respond records */
        records?: (Protocol.ISimpleRecord[]|null);
    }

    /** Represents a SimpleRecord_Respond. */
    class SimpleRecord_Respond implements ISimpleRecord_Respond {

        /**
         * Constructs a new SimpleRecord_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISimpleRecord_Respond);

        /** SimpleRecord_Respond records. */
        public records: Protocol.ISimpleRecord[];

        /**
         * Creates a new SimpleRecord_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SimpleRecord_Respond instance
         */
        public static create(properties?: Protocol.ISimpleRecord_Respond): Protocol.SimpleRecord_Respond;

        /**
         * Encodes the specified SimpleRecord_Respond message. Does not implicitly {@link Protocol.SimpleRecord_Respond.verify|verify} messages.
         * @param message SimpleRecord_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISimpleRecord_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SimpleRecord_Respond message, length delimited. Does not implicitly {@link Protocol.SimpleRecord_Respond.verify|verify} messages.
         * @param message SimpleRecord_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISimpleRecord_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SimpleRecord_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SimpleRecord_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SimpleRecord_Respond;

        /**
         * Decodes a SimpleRecord_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SimpleRecord_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SimpleRecord_Respond;

        /**
         * Verifies a SimpleRecord_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FightRecord_Request. */
    interface IFightRecord_Request {

        /** FightRecord_Request index */
        index?: (number|null);
    }

    /** Represents a FightRecord_Request. */
    class FightRecord_Request implements IFightRecord_Request {

        /**
         * Constructs a new FightRecord_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFightRecord_Request);

        /** FightRecord_Request index. */
        public index: number;

        /**
         * Creates a new FightRecord_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FightRecord_Request instance
         */
        public static create(properties?: Protocol.IFightRecord_Request): Protocol.FightRecord_Request;

        /**
         * Encodes the specified FightRecord_Request message. Does not implicitly {@link Protocol.FightRecord_Request.verify|verify} messages.
         * @param message FightRecord_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFightRecord_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FightRecord_Request message, length delimited. Does not implicitly {@link Protocol.FightRecord_Request.verify|verify} messages.
         * @param message FightRecord_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFightRecord_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightRecord_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightRecord_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FightRecord_Request;

        /**
         * Decodes a FightRecord_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FightRecord_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FightRecord_Request;

        /**
         * Verifies a FightRecord_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FightRecord_Respond. */
    interface IFightRecord_Respond {

        /** FightRecord_Respond record */
        record?: (Protocol.IFightRecord|null);
    }

    /** Represents a FightRecord_Respond. */
    class FightRecord_Respond implements IFightRecord_Respond {

        /**
         * Constructs a new FightRecord_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFightRecord_Respond);

        /** FightRecord_Respond record. */
        public record?: (Protocol.IFightRecord|null);

        /**
         * Creates a new FightRecord_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FightRecord_Respond instance
         */
        public static create(properties?: Protocol.IFightRecord_Respond): Protocol.FightRecord_Respond;

        /**
         * Encodes the specified FightRecord_Respond message. Does not implicitly {@link Protocol.FightRecord_Respond.verify|verify} messages.
         * @param message FightRecord_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFightRecord_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FightRecord_Respond message, length delimited. Does not implicitly {@link Protocol.FightRecord_Respond.verify|verify} messages.
         * @param message FightRecord_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFightRecord_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightRecord_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightRecord_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FightRecord_Respond;

        /**
         * Decodes a FightRecord_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FightRecord_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FightRecord_Respond;

        /**
         * Verifies a FightRecord_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllMails_Request. */
    interface IAllMails_Request {
    }

    /** Represents an AllMails_Request. */
    class AllMails_Request implements IAllMails_Request {

        /**
         * Constructs a new AllMails_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAllMails_Request);

        /**
         * Creates a new AllMails_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllMails_Request instance
         */
        public static create(properties?: Protocol.IAllMails_Request): Protocol.AllMails_Request;

        /**
         * Encodes the specified AllMails_Request message. Does not implicitly {@link Protocol.AllMails_Request.verify|verify} messages.
         * @param message AllMails_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAllMails_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllMails_Request message, length delimited. Does not implicitly {@link Protocol.AllMails_Request.verify|verify} messages.
         * @param message AllMails_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAllMails_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllMails_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllMails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AllMails_Request;

        /**
         * Decodes an AllMails_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllMails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AllMails_Request;

        /**
         * Verifies an AllMails_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllMails_Respond. */
    interface IAllMails_Respond {

        /** AllMails_Respond mails */
        mails?: (Protocol.IMail[]|null);
    }

    /** Represents an AllMails_Respond. */
    class AllMails_Respond implements IAllMails_Respond {

        /**
         * Constructs a new AllMails_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAllMails_Respond);

        /** AllMails_Respond mails. */
        public mails: Protocol.IMail[];

        /**
         * Creates a new AllMails_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllMails_Respond instance
         */
        public static create(properties?: Protocol.IAllMails_Respond): Protocol.AllMails_Respond;

        /**
         * Encodes the specified AllMails_Respond message. Does not implicitly {@link Protocol.AllMails_Respond.verify|verify} messages.
         * @param message AllMails_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAllMails_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllMails_Respond message, length delimited. Does not implicitly {@link Protocol.AllMails_Respond.verify|verify} messages.
         * @param message AllMails_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAllMails_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllMails_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllMails_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AllMails_Respond;

        /**
         * Decodes an AllMails_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllMails_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AllMails_Respond;

        /**
         * Verifies an AllMails_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NoticeMail_Respond. */
    interface INoticeMail_Respond {
    }

    /** Represents a NoticeMail_Respond. */
    class NoticeMail_Respond implements INoticeMail_Respond {

        /**
         * Constructs a new NoticeMail_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.INoticeMail_Respond);

        /**
         * Creates a new NoticeMail_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoticeMail_Respond instance
         */
        public static create(properties?: Protocol.INoticeMail_Respond): Protocol.NoticeMail_Respond;

        /**
         * Encodes the specified NoticeMail_Respond message. Does not implicitly {@link Protocol.NoticeMail_Respond.verify|verify} messages.
         * @param message NoticeMail_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.INoticeMail_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NoticeMail_Respond message, length delimited. Does not implicitly {@link Protocol.NoticeMail_Respond.verify|verify} messages.
         * @param message NoticeMail_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.INoticeMail_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NoticeMail_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoticeMail_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.NoticeMail_Respond;

        /**
         * Decodes a NoticeMail_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoticeMail_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.NoticeMail_Respond;

        /**
         * Verifies a NoticeMail_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReadMail_Request. */
    interface IReadMail_Request {

        /** ReadMail_Request id */
        id?: (string|null);
    }

    /** Represents a ReadMail_Request. */
    class ReadMail_Request implements IReadMail_Request {

        /**
         * Constructs a new ReadMail_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IReadMail_Request);

        /** ReadMail_Request id. */
        public id: string;

        /**
         * Creates a new ReadMail_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadMail_Request instance
         */
        public static create(properties?: Protocol.IReadMail_Request): Protocol.ReadMail_Request;

        /**
         * Encodes the specified ReadMail_Request message. Does not implicitly {@link Protocol.ReadMail_Request.verify|verify} messages.
         * @param message ReadMail_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IReadMail_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReadMail_Request message, length delimited. Does not implicitly {@link Protocol.ReadMail_Request.verify|verify} messages.
         * @param message ReadMail_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IReadMail_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReadMail_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadMail_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.ReadMail_Request;

        /**
         * Decodes a ReadMail_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadMail_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.ReadMail_Request;

        /**
         * Verifies a ReadMail_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReadMail_Respond. */
    interface IReadMail_Respond {

        /** ReadMail_Respond mail */
        mail?: (Protocol.IMail|null);

        /** ReadMail_Respond ret */
        ret?: (number|null);
    }

    /** Represents a ReadMail_Respond. */
    class ReadMail_Respond implements IReadMail_Respond {

        /**
         * Constructs a new ReadMail_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IReadMail_Respond);

        /** ReadMail_Respond mail. */
        public mail?: (Protocol.IMail|null);

        /** ReadMail_Respond ret. */
        public ret: number;

        /**
         * Creates a new ReadMail_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadMail_Respond instance
         */
        public static create(properties?: Protocol.IReadMail_Respond): Protocol.ReadMail_Respond;

        /**
         * Encodes the specified ReadMail_Respond message. Does not implicitly {@link Protocol.ReadMail_Respond.verify|verify} messages.
         * @param message ReadMail_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IReadMail_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReadMail_Respond message, length delimited. Does not implicitly {@link Protocol.ReadMail_Respond.verify|verify} messages.
         * @param message ReadMail_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IReadMail_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReadMail_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadMail_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.ReadMail_Respond;

        /**
         * Decodes a ReadMail_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadMail_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.ReadMail_Respond;

        /**
         * Verifies a ReadMail_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetMail_Request. */
    interface IGetMail_Request {

        /** GetMail_Request id */
        id?: (string[]|null);
    }

    /** Represents a GetMail_Request. */
    class GetMail_Request implements IGetMail_Request {

        /**
         * Constructs a new GetMail_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetMail_Request);

        /** GetMail_Request id. */
        public id: string[];

        /**
         * Creates a new GetMail_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMail_Request instance
         */
        public static create(properties?: Protocol.IGetMail_Request): Protocol.GetMail_Request;

        /**
         * Encodes the specified GetMail_Request message. Does not implicitly {@link Protocol.GetMail_Request.verify|verify} messages.
         * @param message GetMail_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetMail_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetMail_Request message, length delimited. Does not implicitly {@link Protocol.GetMail_Request.verify|verify} messages.
         * @param message GetMail_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetMail_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetMail_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMail_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetMail_Request;

        /**
         * Decodes a GetMail_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMail_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetMail_Request;

        /**
         * Verifies a GetMail_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Getmail_Respond. */
    interface IGetmail_Respond {

        /** Getmail_Respond mail */
        mail?: (Protocol.IMail[]|null);

        /** Getmail_Respond ret */
        ret?: (number|null);
    }

    /** Represents a Getmail_Respond. */
    class Getmail_Respond implements IGetmail_Respond {

        /**
         * Constructs a new Getmail_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetmail_Respond);

        /** Getmail_Respond mail. */
        public mail: Protocol.IMail[];

        /** Getmail_Respond ret. */
        public ret: number;

        /**
         * Creates a new Getmail_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Getmail_Respond instance
         */
        public static create(properties?: Protocol.IGetmail_Respond): Protocol.Getmail_Respond;

        /**
         * Encodes the specified Getmail_Respond message. Does not implicitly {@link Protocol.Getmail_Respond.verify|verify} messages.
         * @param message Getmail_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetmail_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Getmail_Respond message, length delimited. Does not implicitly {@link Protocol.Getmail_Respond.verify|verify} messages.
         * @param message Getmail_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetmail_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Getmail_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Getmail_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Getmail_Respond;

        /**
         * Decodes a Getmail_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Getmail_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Getmail_Respond;

        /**
         * Verifies a Getmail_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DelMail_Request. */
    interface IDelMail_Request {

        /** DelMail_Request id */
        id?: (string[]|null);
    }

    /** Represents a DelMail_Request. */
    class DelMail_Request implements IDelMail_Request {

        /**
         * Constructs a new DelMail_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IDelMail_Request);

        /** DelMail_Request id. */
        public id: string[];

        /**
         * Creates a new DelMail_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelMail_Request instance
         */
        public static create(properties?: Protocol.IDelMail_Request): Protocol.DelMail_Request;

        /**
         * Encodes the specified DelMail_Request message. Does not implicitly {@link Protocol.DelMail_Request.verify|verify} messages.
         * @param message DelMail_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IDelMail_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DelMail_Request message, length delimited. Does not implicitly {@link Protocol.DelMail_Request.verify|verify} messages.
         * @param message DelMail_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IDelMail_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DelMail_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelMail_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.DelMail_Request;

        /**
         * Decodes a DelMail_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelMail_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.DelMail_Request;

        /**
         * Verifies a DelMail_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DelMail_Respond. */
    interface IDelMail_Respond {

        /** DelMail_Respond id */
        id?: (string[]|null);

        /** DelMail_Respond ret */
        ret?: (number|null);
    }

    /** Represents a DelMail_Respond. */
    class DelMail_Respond implements IDelMail_Respond {

        /**
         * Constructs a new DelMail_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IDelMail_Respond);

        /** DelMail_Respond id. */
        public id: string[];

        /** DelMail_Respond ret. */
        public ret: number;

        /**
         * Creates a new DelMail_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelMail_Respond instance
         */
        public static create(properties?: Protocol.IDelMail_Respond): Protocol.DelMail_Respond;

        /**
         * Encodes the specified DelMail_Respond message. Does not implicitly {@link Protocol.DelMail_Respond.verify|verify} messages.
         * @param message DelMail_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IDelMail_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DelMail_Respond message, length delimited. Does not implicitly {@link Protocol.DelMail_Respond.verify|verify} messages.
         * @param message DelMail_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IDelMail_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DelMail_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelMail_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.DelMail_Respond;

        /**
         * Decodes a DelMail_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelMail_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.DelMail_Respond;

        /**
         * Verifies a DelMail_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FightMonster_Request. */
    interface IFightMonster_Request {
    }

    /** Represents a FightMonster_Request. */
    class FightMonster_Request implements IFightMonster_Request {

        /**
         * Constructs a new FightMonster_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFightMonster_Request);

        /**
         * Creates a new FightMonster_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FightMonster_Request instance
         */
        public static create(properties?: Protocol.IFightMonster_Request): Protocol.FightMonster_Request;

        /**
         * Encodes the specified FightMonster_Request message. Does not implicitly {@link Protocol.FightMonster_Request.verify|verify} messages.
         * @param message FightMonster_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFightMonster_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FightMonster_Request message, length delimited. Does not implicitly {@link Protocol.FightMonster_Request.verify|verify} messages.
         * @param message FightMonster_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFightMonster_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightMonster_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightMonster_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FightMonster_Request;

        /**
         * Decodes a FightMonster_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FightMonster_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FightMonster_Request;

        /**
         * Verifies a FightMonster_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FightMonster_Respond. */
    interface IFightMonster_Respond {

        /** FightMonster_Respond info */
        info?: (Protocol.IFightRoomInfo_Respond|null);

        /** FightMonster_Respond ret */
        ret?: (number|null);
    }

    /** Represents a FightMonster_Respond. */
    class FightMonster_Respond implements IFightMonster_Respond {

        /**
         * Constructs a new FightMonster_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFightMonster_Respond);

        /** FightMonster_Respond info. */
        public info?: (Protocol.IFightRoomInfo_Respond|null);

        /** FightMonster_Respond ret. */
        public ret: number;

        /**
         * Creates a new FightMonster_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FightMonster_Respond instance
         */
        public static create(properties?: Protocol.IFightMonster_Respond): Protocol.FightMonster_Respond;

        /**
         * Encodes the specified FightMonster_Respond message. Does not implicitly {@link Protocol.FightMonster_Respond.verify|verify} messages.
         * @param message FightMonster_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFightMonster_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FightMonster_Respond message, length delimited. Does not implicitly {@link Protocol.FightMonster_Respond.verify|verify} messages.
         * @param message FightMonster_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFightMonster_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightMonster_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightMonster_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FightMonster_Respond;

        /**
         * Decodes a FightMonster_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FightMonster_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FightMonster_Respond;

        /**
         * Verifies a FightMonster_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FightMonsterResult_Request. */
    interface IFightMonsterResult_Request {

        /** FightMonsterResult_Request result */
        result?: (number|null);

        /** FightMonsterResult_Request star */
        star?: (number|null);

        /** FightMonsterResult_Request monsterId */
        monsterId?: (number|null);
    }

    /** Represents a FightMonsterResult_Request. */
    class FightMonsterResult_Request implements IFightMonsterResult_Request {

        /**
         * Constructs a new FightMonsterResult_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFightMonsterResult_Request);

        /** FightMonsterResult_Request result. */
        public result: number;

        /** FightMonsterResult_Request star. */
        public star: number;

        /** FightMonsterResult_Request monsterId. */
        public monsterId: number;

        /**
         * Creates a new FightMonsterResult_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FightMonsterResult_Request instance
         */
        public static create(properties?: Protocol.IFightMonsterResult_Request): Protocol.FightMonsterResult_Request;

        /**
         * Encodes the specified FightMonsterResult_Request message. Does not implicitly {@link Protocol.FightMonsterResult_Request.verify|verify} messages.
         * @param message FightMonsterResult_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFightMonsterResult_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FightMonsterResult_Request message, length delimited. Does not implicitly {@link Protocol.FightMonsterResult_Request.verify|verify} messages.
         * @param message FightMonsterResult_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFightMonsterResult_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightMonsterResult_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightMonsterResult_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FightMonsterResult_Request;

        /**
         * Decodes a FightMonsterResult_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FightMonsterResult_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FightMonsterResult_Request;

        /**
         * Verifies a FightMonsterResult_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FightMonsterResult_Respond. */
    interface IFightMonsterResult_Respond {
    }

    /** Represents a FightMonsterResult_Respond. */
    class FightMonsterResult_Respond implements IFightMonsterResult_Respond {

        /**
         * Constructs a new FightMonsterResult_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFightMonsterResult_Respond);

        /**
         * Creates a new FightMonsterResult_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FightMonsterResult_Respond instance
         */
        public static create(properties?: Protocol.IFightMonsterResult_Respond): Protocol.FightMonsterResult_Respond;

        /**
         * Encodes the specified FightMonsterResult_Respond message. Does not implicitly {@link Protocol.FightMonsterResult_Respond.verify|verify} messages.
         * @param message FightMonsterResult_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFightMonsterResult_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FightMonsterResult_Respond message, length delimited. Does not implicitly {@link Protocol.FightMonsterResult_Respond.verify|verify} messages.
         * @param message FightMonsterResult_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFightMonsterResult_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightMonsterResult_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightMonsterResult_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FightMonsterResult_Respond;

        /**
         * Decodes a FightMonsterResult_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FightMonsterResult_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FightMonsterResult_Respond;

        /**
         * Verifies a FightMonsterResult_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SetFamilyInfo_Request. */
    interface ISetFamilyInfo_Request {

        /** SetFamilyInfo_Request name */
        name?: (string|null);

        /** SetFamilyInfo_Request pic */
        pic?: (number|null);

        /** SetFamilyInfo_Request introduce */
        introduce?: (string|null);

        /** SetFamilyInfo_Request autoCup */
        autoCup?: (number|null);

        /** SetFamilyInfo_Request backGroup */
        backGroup?: (number|null);
    }

    /** Represents a SetFamilyInfo_Request. */
    class SetFamilyInfo_Request implements ISetFamilyInfo_Request {

        /**
         * Constructs a new SetFamilyInfo_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISetFamilyInfo_Request);

        /** SetFamilyInfo_Request name. */
        public name: string;

        /** SetFamilyInfo_Request pic. */
        public pic: number;

        /** SetFamilyInfo_Request introduce. */
        public introduce: string;

        /** SetFamilyInfo_Request autoCup. */
        public autoCup: number;

        /** SetFamilyInfo_Request backGroup. */
        public backGroup: number;

        /**
         * Creates a new SetFamilyInfo_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetFamilyInfo_Request instance
         */
        public static create(properties?: Protocol.ISetFamilyInfo_Request): Protocol.SetFamilyInfo_Request;

        /**
         * Encodes the specified SetFamilyInfo_Request message. Does not implicitly {@link Protocol.SetFamilyInfo_Request.verify|verify} messages.
         * @param message SetFamilyInfo_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISetFamilyInfo_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SetFamilyInfo_Request message, length delimited. Does not implicitly {@link Protocol.SetFamilyInfo_Request.verify|verify} messages.
         * @param message SetFamilyInfo_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISetFamilyInfo_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SetFamilyInfo_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetFamilyInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SetFamilyInfo_Request;

        /**
         * Decodes a SetFamilyInfo_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetFamilyInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SetFamilyInfo_Request;

        /**
         * Verifies a SetFamilyInfo_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SetFamilyInfo_Respond. */
    interface ISetFamilyInfo_Respond {

        /** SetFamilyInfo_Respond name */
        name?: (string|null);

        /** SetFamilyInfo_Respond pic */
        pic?: (number|null);

        /** SetFamilyInfo_Respond introduce */
        introduce?: (string|null);

        /** SetFamilyInfo_Respond autoCup */
        autoCup?: (number|null);

        /** SetFamilyInfo_Respond ret */
        ret?: (number|null);

        /** SetFamilyInfo_Respond backGroup */
        backGroup?: (number|null);
    }

    /** Represents a SetFamilyInfo_Respond. */
    class SetFamilyInfo_Respond implements ISetFamilyInfo_Respond {

        /**
         * Constructs a new SetFamilyInfo_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISetFamilyInfo_Respond);

        /** SetFamilyInfo_Respond name. */
        public name: string;

        /** SetFamilyInfo_Respond pic. */
        public pic: number;

        /** SetFamilyInfo_Respond introduce. */
        public introduce: string;

        /** SetFamilyInfo_Respond autoCup. */
        public autoCup: number;

        /** SetFamilyInfo_Respond ret. */
        public ret: number;

        /** SetFamilyInfo_Respond backGroup. */
        public backGroup: number;

        /**
         * Creates a new SetFamilyInfo_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetFamilyInfo_Respond instance
         */
        public static create(properties?: Protocol.ISetFamilyInfo_Respond): Protocol.SetFamilyInfo_Respond;

        /**
         * Encodes the specified SetFamilyInfo_Respond message. Does not implicitly {@link Protocol.SetFamilyInfo_Respond.verify|verify} messages.
         * @param message SetFamilyInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISetFamilyInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SetFamilyInfo_Respond message, length delimited. Does not implicitly {@link Protocol.SetFamilyInfo_Respond.verify|verify} messages.
         * @param message SetFamilyInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISetFamilyInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SetFamilyInfo_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetFamilyInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SetFamilyInfo_Respond;

        /**
         * Decodes a SetFamilyInfo_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetFamilyInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SetFamilyInfo_Respond;

        /**
         * Verifies a SetFamilyInfo_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a QueryRoleLineUp_Request. */
    interface IQueryRoleLineUp_Request {

        /** QueryRoleLineUp_Request roleIds */
        roleIds?: ((number|Long)[]|null);
    }

    /** Represents a QueryRoleLineUp_Request. */
    class QueryRoleLineUp_Request implements IQueryRoleLineUp_Request {

        /**
         * Constructs a new QueryRoleLineUp_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IQueryRoleLineUp_Request);

        /** QueryRoleLineUp_Request roleIds. */
        public roleIds: (number|Long)[];

        /**
         * Creates a new QueryRoleLineUp_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryRoleLineUp_Request instance
         */
        public static create(properties?: Protocol.IQueryRoleLineUp_Request): Protocol.QueryRoleLineUp_Request;

        /**
         * Encodes the specified QueryRoleLineUp_Request message. Does not implicitly {@link Protocol.QueryRoleLineUp_Request.verify|verify} messages.
         * @param message QueryRoleLineUp_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IQueryRoleLineUp_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified QueryRoleLineUp_Request message, length delimited. Does not implicitly {@link Protocol.QueryRoleLineUp_Request.verify|verify} messages.
         * @param message QueryRoleLineUp_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IQueryRoleLineUp_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a QueryRoleLineUp_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryRoleLineUp_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.QueryRoleLineUp_Request;

        /**
         * Decodes a QueryRoleLineUp_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryRoleLineUp_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.QueryRoleLineUp_Request;

        /**
         * Verifies a QueryRoleLineUp_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a QueryRoleLineUp_Respond. */
    interface IQueryRoleLineUp_Respond {

        /** QueryRoleLineUp_Respond roleId */
        roleId?: (number|Long|null);

        /** QueryRoleLineUp_Respond infos */
        infos?: (Protocol.IRankInfo[]|null);
    }

    /** Represents a QueryRoleLineUp_Respond. */
    class QueryRoleLineUp_Respond implements IQueryRoleLineUp_Respond {

        /**
         * Constructs a new QueryRoleLineUp_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IQueryRoleLineUp_Respond);

        /** QueryRoleLineUp_Respond roleId. */
        public roleId: (number|Long);

        /** QueryRoleLineUp_Respond infos. */
        public infos: Protocol.IRankInfo[];

        /**
         * Creates a new QueryRoleLineUp_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryRoleLineUp_Respond instance
         */
        public static create(properties?: Protocol.IQueryRoleLineUp_Respond): Protocol.QueryRoleLineUp_Respond;

        /**
         * Encodes the specified QueryRoleLineUp_Respond message. Does not implicitly {@link Protocol.QueryRoleLineUp_Respond.verify|verify} messages.
         * @param message QueryRoleLineUp_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IQueryRoleLineUp_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified QueryRoleLineUp_Respond message, length delimited. Does not implicitly {@link Protocol.QueryRoleLineUp_Respond.verify|verify} messages.
         * @param message QueryRoleLineUp_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IQueryRoleLineUp_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a QueryRoleLineUp_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryRoleLineUp_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.QueryRoleLineUp_Respond;

        /**
         * Decodes a QueryRoleLineUp_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryRoleLineUp_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.QueryRoleLineUp_Respond;

        /**
         * Verifies a QueryRoleLineUp_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllBox_Request. */
    interface IAllBox_Request {
    }

    /** Represents an AllBox_Request. */
    class AllBox_Request implements IAllBox_Request {

        /**
         * Constructs a new AllBox_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAllBox_Request);

        /**
         * Creates a new AllBox_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllBox_Request instance
         */
        public static create(properties?: Protocol.IAllBox_Request): Protocol.AllBox_Request;

        /**
         * Encodes the specified AllBox_Request message. Does not implicitly {@link Protocol.AllBox_Request.verify|verify} messages.
         * @param message AllBox_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAllBox_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllBox_Request message, length delimited. Does not implicitly {@link Protocol.AllBox_Request.verify|verify} messages.
         * @param message AllBox_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAllBox_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllBox_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllBox_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AllBox_Request;

        /**
         * Decodes an AllBox_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllBox_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AllBox_Request;

        /**
         * Verifies an AllBox_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllBox_Respond. */
    interface IAllBox_Respond {

        /** AllBox_Respond boxs */
        boxs?: (Protocol.IBox[]|null);
    }

    /** Represents an AllBox_Respond. */
    class AllBox_Respond implements IAllBox_Respond {

        /**
         * Constructs a new AllBox_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAllBox_Respond);

        /** AllBox_Respond boxs. */
        public boxs: Protocol.IBox[];

        /**
         * Creates a new AllBox_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllBox_Respond instance
         */
        public static create(properties?: Protocol.IAllBox_Respond): Protocol.AllBox_Respond;

        /**
         * Encodes the specified AllBox_Respond message. Does not implicitly {@link Protocol.AllBox_Respond.verify|verify} messages.
         * @param message AllBox_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAllBox_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllBox_Respond message, length delimited. Does not implicitly {@link Protocol.AllBox_Respond.verify|verify} messages.
         * @param message AllBox_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAllBox_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllBox_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllBox_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AllBox_Respond;

        /**
         * Decodes an AllBox_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllBox_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AllBox_Respond;

        /**
         * Verifies an AllBox_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SingleBox_Respond. */
    interface ISingleBox_Respond {

        /** SingleBox_Respond box */
        box?: (Protocol.IBox|null);
    }

    /** Represents a SingleBox_Respond. */
    class SingleBox_Respond implements ISingleBox_Respond {

        /**
         * Constructs a new SingleBox_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISingleBox_Respond);

        /** SingleBox_Respond box. */
        public box?: (Protocol.IBox|null);

        /**
         * Creates a new SingleBox_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SingleBox_Respond instance
         */
        public static create(properties?: Protocol.ISingleBox_Respond): Protocol.SingleBox_Respond;

        /**
         * Encodes the specified SingleBox_Respond message. Does not implicitly {@link Protocol.SingleBox_Respond.verify|verify} messages.
         * @param message SingleBox_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISingleBox_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SingleBox_Respond message, length delimited. Does not implicitly {@link Protocol.SingleBox_Respond.verify|verify} messages.
         * @param message SingleBox_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISingleBox_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SingleBox_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SingleBox_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SingleBox_Respond;

        /**
         * Decodes a SingleBox_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SingleBox_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SingleBox_Respond;

        /**
         * Verifies a SingleBox_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an OpenBox_Request. */
    interface IOpenBox_Request {

        /** OpenBox_Request id */
        id?: (string|null);
    }

    /** Represents an OpenBox_Request. */
    class OpenBox_Request implements IOpenBox_Request {

        /**
         * Constructs a new OpenBox_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IOpenBox_Request);

        /** OpenBox_Request id. */
        public id: string;

        /**
         * Creates a new OpenBox_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenBox_Request instance
         */
        public static create(properties?: Protocol.IOpenBox_Request): Protocol.OpenBox_Request;

        /**
         * Encodes the specified OpenBox_Request message. Does not implicitly {@link Protocol.OpenBox_Request.verify|verify} messages.
         * @param message OpenBox_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IOpenBox_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OpenBox_Request message, length delimited. Does not implicitly {@link Protocol.OpenBox_Request.verify|verify} messages.
         * @param message OpenBox_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IOpenBox_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OpenBox_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenBox_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.OpenBox_Request;

        /**
         * Decodes an OpenBox_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenBox_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.OpenBox_Request;

        /**
         * Verifies an OpenBox_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an OpenBox_Respond. */
    interface IOpenBox_Respond {

        /** OpenBox_Respond id */
        id?: (string|null);

        /** OpenBox_Respond ret */
        ret?: (boolean|null);
    }

    /** Represents an OpenBox_Respond. */
    class OpenBox_Respond implements IOpenBox_Respond {

        /**
         * Constructs a new OpenBox_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IOpenBox_Respond);

        /** OpenBox_Respond id. */
        public id: string;

        /** OpenBox_Respond ret. */
        public ret: boolean;

        /**
         * Creates a new OpenBox_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenBox_Respond instance
         */
        public static create(properties?: Protocol.IOpenBox_Respond): Protocol.OpenBox_Respond;

        /**
         * Encodes the specified OpenBox_Respond message. Does not implicitly {@link Protocol.OpenBox_Respond.verify|verify} messages.
         * @param message OpenBox_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IOpenBox_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OpenBox_Respond message, length delimited. Does not implicitly {@link Protocol.OpenBox_Respond.verify|verify} messages.
         * @param message OpenBox_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IOpenBox_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OpenBox_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenBox_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.OpenBox_Respond;

        /**
         * Decodes an OpenBox_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenBox_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.OpenBox_Respond;

        /**
         * Verifies an OpenBox_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetBox_Request. */
    interface IGetBox_Request {

        /** GetBox_Request id */
        id?: (string|null);
    }

    /** Represents a GetBox_Request. */
    class GetBox_Request implements IGetBox_Request {

        /**
         * Constructs a new GetBox_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetBox_Request);

        /** GetBox_Request id. */
        public id: string;

        /**
         * Creates a new GetBox_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetBox_Request instance
         */
        public static create(properties?: Protocol.IGetBox_Request): Protocol.GetBox_Request;

        /**
         * Encodes the specified GetBox_Request message. Does not implicitly {@link Protocol.GetBox_Request.verify|verify} messages.
         * @param message GetBox_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetBox_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetBox_Request message, length delimited. Does not implicitly {@link Protocol.GetBox_Request.verify|verify} messages.
         * @param message GetBox_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetBox_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetBox_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetBox_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetBox_Request;

        /**
         * Decodes a GetBox_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetBox_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetBox_Request;

        /**
         * Verifies a GetBox_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetBox_Respond. */
    interface IGetBox_Respond {

        /** GetBox_Respond id */
        id?: (string|null);

        /** GetBox_Respond ret */
        ret?: (boolean|null);
    }

    /** Represents a GetBox_Respond. */
    class GetBox_Respond implements IGetBox_Respond {

        /**
         * Constructs a new GetBox_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetBox_Respond);

        /** GetBox_Respond id. */
        public id: string;

        /** GetBox_Respond ret. */
        public ret: boolean;

        /**
         * Creates a new GetBox_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetBox_Respond instance
         */
        public static create(properties?: Protocol.IGetBox_Respond): Protocol.GetBox_Respond;

        /**
         * Encodes the specified GetBox_Respond message. Does not implicitly {@link Protocol.GetBox_Respond.verify|verify} messages.
         * @param message GetBox_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetBox_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetBox_Respond message, length delimited. Does not implicitly {@link Protocol.GetBox_Respond.verify|verify} messages.
         * @param message GetBox_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetBox_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetBox_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetBox_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetBox_Respond;

        /**
         * Decodes a GetBox_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetBox_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetBox_Respond;

        /**
         * Verifies a GetBox_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeleteBox_Respond. */
    interface IDeleteBox_Respond {

        /** DeleteBox_Respond id */
        id?: (string|null);
    }

    /** Represents a DeleteBox_Respond. */
    class DeleteBox_Respond implements IDeleteBox_Respond {

        /**
         * Constructs a new DeleteBox_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IDeleteBox_Respond);

        /** DeleteBox_Respond id. */
        public id: string;

        /**
         * Creates a new DeleteBox_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteBox_Respond instance
         */
        public static create(properties?: Protocol.IDeleteBox_Respond): Protocol.DeleteBox_Respond;

        /**
         * Encodes the specified DeleteBox_Respond message. Does not implicitly {@link Protocol.DeleteBox_Respond.verify|verify} messages.
         * @param message DeleteBox_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IDeleteBox_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeleteBox_Respond message, length delimited. Does not implicitly {@link Protocol.DeleteBox_Respond.verify|verify} messages.
         * @param message DeleteBox_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IDeleteBox_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeleteBox_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteBox_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.DeleteBox_Respond;

        /**
         * Decodes a DeleteBox_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteBox_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.DeleteBox_Respond;

        /**
         * Verifies a DeleteBox_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BoxReward_Respond. */
    interface IBoxReward_Respond {

        /** BoxReward_Respond rewards */
        rewards?: (Protocol.IReward[]|null);

        /** BoxReward_Respond boxId */
        boxId?: (number|null);
    }

    /** Represents a BoxReward_Respond. */
    class BoxReward_Respond implements IBoxReward_Respond {

        /**
         * Constructs a new BoxReward_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBoxReward_Respond);

        /** BoxReward_Respond rewards. */
        public rewards: Protocol.IReward[];

        /** BoxReward_Respond boxId. */
        public boxId: number;

        /**
         * Creates a new BoxReward_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BoxReward_Respond instance
         */
        public static create(properties?: Protocol.IBoxReward_Respond): Protocol.BoxReward_Respond;

        /**
         * Encodes the specified BoxReward_Respond message. Does not implicitly {@link Protocol.BoxReward_Respond.verify|verify} messages.
         * @param message BoxReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBoxReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BoxReward_Respond message, length delimited. Does not implicitly {@link Protocol.BoxReward_Respond.verify|verify} messages.
         * @param message BoxReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBoxReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BoxReward_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BoxReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BoxReward_Respond;

        /**
         * Decodes a BoxReward_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BoxReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BoxReward_Respond;

        /**
         * Verifies a BoxReward_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CostKey_Request. */
    interface ICostKey_Request {

        /** CostKey_Request id */
        id?: (string|null);
    }

    /** Represents a CostKey_Request. */
    class CostKey_Request implements ICostKey_Request {

        /**
         * Constructs a new CostKey_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICostKey_Request);

        /** CostKey_Request id. */
        public id: string;

        /**
         * Creates a new CostKey_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CostKey_Request instance
         */
        public static create(properties?: Protocol.ICostKey_Request): Protocol.CostKey_Request;

        /**
         * Encodes the specified CostKey_Request message. Does not implicitly {@link Protocol.CostKey_Request.verify|verify} messages.
         * @param message CostKey_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICostKey_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CostKey_Request message, length delimited. Does not implicitly {@link Protocol.CostKey_Request.verify|verify} messages.
         * @param message CostKey_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICostKey_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CostKey_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CostKey_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.CostKey_Request;

        /**
         * Decodes a CostKey_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CostKey_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.CostKey_Request;

        /**
         * Verifies a CostKey_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CostKey_Respond. */
    interface ICostKey_Respond {

        /** CostKey_Respond ret */
        ret?: (number|null);
    }

    /** Represents a CostKey_Respond. */
    class CostKey_Respond implements ICostKey_Respond {

        /**
         * Constructs a new CostKey_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICostKey_Respond);

        /** CostKey_Respond ret. */
        public ret: number;

        /**
         * Creates a new CostKey_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CostKey_Respond instance
         */
        public static create(properties?: Protocol.ICostKey_Respond): Protocol.CostKey_Respond;

        /**
         * Encodes the specified CostKey_Respond message. Does not implicitly {@link Protocol.CostKey_Respond.verify|verify} messages.
         * @param message CostKey_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICostKey_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CostKey_Respond message, length delimited. Does not implicitly {@link Protocol.CostKey_Respond.verify|verify} messages.
         * @param message CostKey_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICostKey_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CostKey_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CostKey_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.CostKey_Respond;

        /**
         * Decodes a CostKey_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CostKey_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.CostKey_Respond;

        /**
         * Verifies a CostKey_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyKey_Request. */
    interface IBuyKey_Request {

        /** BuyKey_Request diamond */
        diamond?: (number|null);
    }

    /** Represents a BuyKey_Request. */
    class BuyKey_Request implements IBuyKey_Request {

        /**
         * Constructs a new BuyKey_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyKey_Request);

        /** BuyKey_Request diamond. */
        public diamond: number;

        /**
         * Creates a new BuyKey_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyKey_Request instance
         */
        public static create(properties?: Protocol.IBuyKey_Request): Protocol.BuyKey_Request;

        /**
         * Encodes the specified BuyKey_Request message. Does not implicitly {@link Protocol.BuyKey_Request.verify|verify} messages.
         * @param message BuyKey_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyKey_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyKey_Request message, length delimited. Does not implicitly {@link Protocol.BuyKey_Request.verify|verify} messages.
         * @param message BuyKey_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyKey_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyKey_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyKey_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyKey_Request;

        /**
         * Decodes a BuyKey_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyKey_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyKey_Request;

        /**
         * Verifies a BuyKey_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyKey_Respond. */
    interface IBuyKey_Respond {

        /** BuyKey_Respond ret */
        ret?: (number|null);
    }

    /** Represents a BuyKey_Respond. */
    class BuyKey_Respond implements IBuyKey_Respond {

        /**
         * Constructs a new BuyKey_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyKey_Respond);

        /** BuyKey_Respond ret. */
        public ret: number;

        /**
         * Creates a new BuyKey_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyKey_Respond instance
         */
        public static create(properties?: Protocol.IBuyKey_Respond): Protocol.BuyKey_Respond;

        /**
         * Encodes the specified BuyKey_Respond message. Does not implicitly {@link Protocol.BuyKey_Respond.verify|verify} messages.
         * @param message BuyKey_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyKey_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyKey_Respond message, length delimited. Does not implicitly {@link Protocol.BuyKey_Respond.verify|verify} messages.
         * @param message BuyKey_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyKey_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyKey_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyKey_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyKey_Respond;

        /**
         * Decodes a BuyKey_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyKey_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyKey_Respond;

        /**
         * Verifies a BuyKey_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyTaskTime_Request. */
    interface IBuyTaskTime_Request {

        /** BuyTaskTime_Request taskId */
        taskId?: (number|null);
    }

    /** Represents a BuyTaskTime_Request. */
    class BuyTaskTime_Request implements IBuyTaskTime_Request {

        /**
         * Constructs a new BuyTaskTime_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyTaskTime_Request);

        /** BuyTaskTime_Request taskId. */
        public taskId: number;

        /**
         * Creates a new BuyTaskTime_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyTaskTime_Request instance
         */
        public static create(properties?: Protocol.IBuyTaskTime_Request): Protocol.BuyTaskTime_Request;

        /**
         * Encodes the specified BuyTaskTime_Request message. Does not implicitly {@link Protocol.BuyTaskTime_Request.verify|verify} messages.
         * @param message BuyTaskTime_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyTaskTime_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyTaskTime_Request message, length delimited. Does not implicitly {@link Protocol.BuyTaskTime_Request.verify|verify} messages.
         * @param message BuyTaskTime_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyTaskTime_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyTaskTime_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyTaskTime_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyTaskTime_Request;

        /**
         * Decodes a BuyTaskTime_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyTaskTime_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyTaskTime_Request;

        /**
         * Verifies a BuyTaskTime_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyTaskTime_Respond. */
    interface IBuyTaskTime_Respond {

        /** BuyTaskTime_Respond ret */
        ret?: (number|null);
    }

    /** Represents a BuyTaskTime_Respond. */
    class BuyTaskTime_Respond implements IBuyTaskTime_Respond {

        /**
         * Constructs a new BuyTaskTime_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyTaskTime_Respond);

        /** BuyTaskTime_Respond ret. */
        public ret: number;

        /**
         * Creates a new BuyTaskTime_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyTaskTime_Respond instance
         */
        public static create(properties?: Protocol.IBuyTaskTime_Respond): Protocol.BuyTaskTime_Respond;

        /**
         * Encodes the specified BuyTaskTime_Respond message. Does not implicitly {@link Protocol.BuyTaskTime_Respond.verify|verify} messages.
         * @param message BuyTaskTime_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyTaskTime_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyTaskTime_Respond message, length delimited. Does not implicitly {@link Protocol.BuyTaskTime_Respond.verify|verify} messages.
         * @param message BuyTaskTime_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyTaskTime_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyTaskTime_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyTaskTime_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyTaskTime_Respond;

        /**
         * Decodes a BuyTaskTime_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyTaskTime_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyTaskTime_Respond;

        /**
         * Verifies a BuyTaskTime_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ChangeName_Request. */
    interface IChangeName_Request {

        /** ChangeName_Request name */
        name?: (string|null);
    }

    /** Represents a ChangeName_Request. */
    class ChangeName_Request implements IChangeName_Request {

        /**
         * Constructs a new ChangeName_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IChangeName_Request);

        /** ChangeName_Request name. */
        public name: string;

        /**
         * Creates a new ChangeName_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeName_Request instance
         */
        public static create(properties?: Protocol.IChangeName_Request): Protocol.ChangeName_Request;

        /**
         * Encodes the specified ChangeName_Request message. Does not implicitly {@link Protocol.ChangeName_Request.verify|verify} messages.
         * @param message ChangeName_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IChangeName_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChangeName_Request message, length delimited. Does not implicitly {@link Protocol.ChangeName_Request.verify|verify} messages.
         * @param message ChangeName_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IChangeName_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChangeName_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeName_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.ChangeName_Request;

        /**
         * Decodes a ChangeName_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeName_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.ChangeName_Request;

        /**
         * Verifies a ChangeName_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ChangeName_Respond. */
    interface IChangeName_Respond {

        /** ChangeName_Respond ret */
        ret?: (number|null);

        /** ChangeName_Respond name */
        name?: (string|null);
    }

    /** Represents a ChangeName_Respond. */
    class ChangeName_Respond implements IChangeName_Respond {

        /**
         * Constructs a new ChangeName_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IChangeName_Respond);

        /** ChangeName_Respond ret. */
        public ret: number;

        /** ChangeName_Respond name. */
        public name: string;

        /**
         * Creates a new ChangeName_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeName_Respond instance
         */
        public static create(properties?: Protocol.IChangeName_Respond): Protocol.ChangeName_Respond;

        /**
         * Encodes the specified ChangeName_Respond message. Does not implicitly {@link Protocol.ChangeName_Respond.verify|verify} messages.
         * @param message ChangeName_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IChangeName_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChangeName_Respond message, length delimited. Does not implicitly {@link Protocol.ChangeName_Respond.verify|verify} messages.
         * @param message ChangeName_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IChangeName_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChangeName_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeName_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.ChangeName_Respond;

        /**
         * Decodes a ChangeName_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeName_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.ChangeName_Respond;

        /**
         * Verifies a ChangeName_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a WarGodInfo_Request. */
    interface IWarGodInfo_Request {
    }

    /** Represents a WarGodInfo_Request. */
    class WarGodInfo_Request implements IWarGodInfo_Request {

        /**
         * Constructs a new WarGodInfo_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IWarGodInfo_Request);

        /**
         * Creates a new WarGodInfo_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarGodInfo_Request instance
         */
        public static create(properties?: Protocol.IWarGodInfo_Request): Protocol.WarGodInfo_Request;

        /**
         * Encodes the specified WarGodInfo_Request message. Does not implicitly {@link Protocol.WarGodInfo_Request.verify|verify} messages.
         * @param message WarGodInfo_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IWarGodInfo_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WarGodInfo_Request message, length delimited. Does not implicitly {@link Protocol.WarGodInfo_Request.verify|verify} messages.
         * @param message WarGodInfo_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IWarGodInfo_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WarGodInfo_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarGodInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.WarGodInfo_Request;

        /**
         * Decodes a WarGodInfo_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarGodInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.WarGodInfo_Request;

        /**
         * Verifies a WarGodInfo_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a WarGodInfo_Respond. */
    interface IWarGodInfo_Respond {

        /** WarGodInfo_Respond begin */
        begin?: (string|null);

        /** WarGodInfo_Respond end */
        end?: (string|null);

        /** WarGodInfo_Respond state */
        state?: (boolean|null);

        /** WarGodInfo_Respond infos */
        infos?: (Protocol.IWarGodGettedInfo[]|null);

        /** WarGodInfo_Respond warGodCode */
        warGodCode?: (string|null);

        /** WarGodInfo_Respond selfWarGodCode */
        selfWarGodCode?: (string|null);
    }

    /** Represents a WarGodInfo_Respond. */
    class WarGodInfo_Respond implements IWarGodInfo_Respond {

        /**
         * Constructs a new WarGodInfo_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IWarGodInfo_Respond);

        /** WarGodInfo_Respond begin. */
        public begin: string;

        /** WarGodInfo_Respond end. */
        public end: string;

        /** WarGodInfo_Respond state. */
        public state: boolean;

        /** WarGodInfo_Respond infos. */
        public infos: Protocol.IWarGodGettedInfo[];

        /** WarGodInfo_Respond warGodCode. */
        public warGodCode: string;

        /** WarGodInfo_Respond selfWarGodCode. */
        public selfWarGodCode: string;

        /**
         * Creates a new WarGodInfo_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarGodInfo_Respond instance
         */
        public static create(properties?: Protocol.IWarGodInfo_Respond): Protocol.WarGodInfo_Respond;

        /**
         * Encodes the specified WarGodInfo_Respond message. Does not implicitly {@link Protocol.WarGodInfo_Respond.verify|verify} messages.
         * @param message WarGodInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IWarGodInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WarGodInfo_Respond message, length delimited. Does not implicitly {@link Protocol.WarGodInfo_Respond.verify|verify} messages.
         * @param message WarGodInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IWarGodInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WarGodInfo_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarGodInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.WarGodInfo_Respond;

        /**
         * Decodes a WarGodInfo_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarGodInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.WarGodInfo_Respond;

        /**
         * Verifies a WarGodInfo_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a WarGodReward_Request. */
    interface IWarGodReward_Request {

        /** WarGodReward_Request index */
        index?: (number|null);

        /** WarGodReward_Request type */
        type?: (boolean|null);
    }

    /** Represents a WarGodReward_Request. */
    class WarGodReward_Request implements IWarGodReward_Request {

        /**
         * Constructs a new WarGodReward_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IWarGodReward_Request);

        /** WarGodReward_Request index. */
        public index: number;

        /** WarGodReward_Request type. */
        public type: boolean;

        /**
         * Creates a new WarGodReward_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarGodReward_Request instance
         */
        public static create(properties?: Protocol.IWarGodReward_Request): Protocol.WarGodReward_Request;

        /**
         * Encodes the specified WarGodReward_Request message. Does not implicitly {@link Protocol.WarGodReward_Request.verify|verify} messages.
         * @param message WarGodReward_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IWarGodReward_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WarGodReward_Request message, length delimited. Does not implicitly {@link Protocol.WarGodReward_Request.verify|verify} messages.
         * @param message WarGodReward_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IWarGodReward_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WarGodReward_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarGodReward_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.WarGodReward_Request;

        /**
         * Decodes a WarGodReward_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarGodReward_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.WarGodReward_Request;

        /**
         * Verifies a WarGodReward_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a WarGodReward_Respond. */
    interface IWarGodReward_Respond {

        /** WarGodReward_Respond index */
        index?: (number|null);

        /** WarGodReward_Respond ret */
        ret?: (number|null);

        /** WarGodReward_Respond type */
        type?: (boolean|null);
    }

    /** Represents a WarGodReward_Respond. */
    class WarGodReward_Respond implements IWarGodReward_Respond {

        /**
         * Constructs a new WarGodReward_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IWarGodReward_Respond);

        /** WarGodReward_Respond index. */
        public index: number;

        /** WarGodReward_Respond ret. */
        public ret: number;

        /** WarGodReward_Respond type. */
        public type: boolean;

        /**
         * Creates a new WarGodReward_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarGodReward_Respond instance
         */
        public static create(properties?: Protocol.IWarGodReward_Respond): Protocol.WarGodReward_Respond;

        /**
         * Encodes the specified WarGodReward_Respond message. Does not implicitly {@link Protocol.WarGodReward_Respond.verify|verify} messages.
         * @param message WarGodReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IWarGodReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WarGodReward_Respond message, length delimited. Does not implicitly {@link Protocol.WarGodReward_Respond.verify|verify} messages.
         * @param message WarGodReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IWarGodReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WarGodReward_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarGodReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.WarGodReward_Respond;

        /**
         * Decodes a WarGodReward_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarGodReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.WarGodReward_Respond;

        /**
         * Verifies a WarGodReward_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetLoginReward_Request. */
    interface IGetLoginReward_Request {

        /** GetLoginReward_Request index */
        index?: (number|null);
    }

    /** Represents a GetLoginReward_Request. */
    class GetLoginReward_Request implements IGetLoginReward_Request {

        /**
         * Constructs a new GetLoginReward_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetLoginReward_Request);

        /** GetLoginReward_Request index. */
        public index: number;

        /**
         * Creates a new GetLoginReward_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLoginReward_Request instance
         */
        public static create(properties?: Protocol.IGetLoginReward_Request): Protocol.GetLoginReward_Request;

        /**
         * Encodes the specified GetLoginReward_Request message. Does not implicitly {@link Protocol.GetLoginReward_Request.verify|verify} messages.
         * @param message GetLoginReward_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetLoginReward_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetLoginReward_Request message, length delimited. Does not implicitly {@link Protocol.GetLoginReward_Request.verify|verify} messages.
         * @param message GetLoginReward_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetLoginReward_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetLoginReward_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLoginReward_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetLoginReward_Request;

        /**
         * Decodes a GetLoginReward_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLoginReward_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetLoginReward_Request;

        /**
         * Verifies a GetLoginReward_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetLoginReward_Respond. */
    interface IGetLoginReward_Respond {

        /** GetLoginReward_Respond index */
        index?: (number|null);

        /** GetLoginReward_Respond ret */
        ret?: (number|null);
    }

    /** Represents a GetLoginReward_Respond. */
    class GetLoginReward_Respond implements IGetLoginReward_Respond {

        /**
         * Constructs a new GetLoginReward_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetLoginReward_Respond);

        /** GetLoginReward_Respond index. */
        public index: number;

        /** GetLoginReward_Respond ret. */
        public ret: number;

        /**
         * Creates a new GetLoginReward_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLoginReward_Respond instance
         */
        public static create(properties?: Protocol.IGetLoginReward_Respond): Protocol.GetLoginReward_Respond;

        /**
         * Encodes the specified GetLoginReward_Respond message. Does not implicitly {@link Protocol.GetLoginReward_Respond.verify|verify} messages.
         * @param message GetLoginReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetLoginReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetLoginReward_Respond message, length delimited. Does not implicitly {@link Protocol.GetLoginReward_Respond.verify|verify} messages.
         * @param message GetLoginReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetLoginReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetLoginReward_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLoginReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetLoginReward_Respond;

        /**
         * Decodes a GetLoginReward_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLoginReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetLoginReward_Respond;

        /**
         * Verifies a GetLoginReward_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PassDaya_Respond. */
    interface IPassDaya_Respond {
    }

    /** Represents a PassDaya_Respond. */
    class PassDaya_Respond implements IPassDaya_Respond {

        /**
         * Constructs a new PassDaya_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IPassDaya_Respond);

        /**
         * Creates a new PassDaya_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PassDaya_Respond instance
         */
        public static create(properties?: Protocol.IPassDaya_Respond): Protocol.PassDaya_Respond;

        /**
         * Encodes the specified PassDaya_Respond message. Does not implicitly {@link Protocol.PassDaya_Respond.verify|verify} messages.
         * @param message PassDaya_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IPassDaya_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PassDaya_Respond message, length delimited. Does not implicitly {@link Protocol.PassDaya_Respond.verify|verify} messages.
         * @param message PassDaya_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IPassDaya_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PassDaya_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PassDaya_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.PassDaya_Respond;

        /**
         * Decodes a PassDaya_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PassDaya_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.PassDaya_Respond;

        /**
         * Verifies a PassDaya_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AskLoginRewardGetted_Request. */
    interface IAskLoginRewardGetted_Request {
    }

    /** Represents an AskLoginRewardGetted_Request. */
    class AskLoginRewardGetted_Request implements IAskLoginRewardGetted_Request {

        /**
         * Constructs a new AskLoginRewardGetted_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAskLoginRewardGetted_Request);

        /**
         * Creates a new AskLoginRewardGetted_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AskLoginRewardGetted_Request instance
         */
        public static create(properties?: Protocol.IAskLoginRewardGetted_Request): Protocol.AskLoginRewardGetted_Request;

        /**
         * Encodes the specified AskLoginRewardGetted_Request message. Does not implicitly {@link Protocol.AskLoginRewardGetted_Request.verify|verify} messages.
         * @param message AskLoginRewardGetted_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAskLoginRewardGetted_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AskLoginRewardGetted_Request message, length delimited. Does not implicitly {@link Protocol.AskLoginRewardGetted_Request.verify|verify} messages.
         * @param message AskLoginRewardGetted_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAskLoginRewardGetted_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AskLoginRewardGetted_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskLoginRewardGetted_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AskLoginRewardGetted_Request;

        /**
         * Decodes an AskLoginRewardGetted_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskLoginRewardGetted_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AskLoginRewardGetted_Request;

        /**
         * Verifies an AskLoginRewardGetted_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AskLoginRewardGetted_Respond. */
    interface IAskLoginRewardGetted_Respond {

        /** AskLoginRewardGetted_Respond ids */
        ids?: (number[]|null);
    }

    /** Represents an AskLoginRewardGetted_Respond. */
    class AskLoginRewardGetted_Respond implements IAskLoginRewardGetted_Respond {

        /**
         * Constructs a new AskLoginRewardGetted_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAskLoginRewardGetted_Respond);

        /** AskLoginRewardGetted_Respond ids. */
        public ids: number[];

        /**
         * Creates a new AskLoginRewardGetted_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AskLoginRewardGetted_Respond instance
         */
        public static create(properties?: Protocol.IAskLoginRewardGetted_Respond): Protocol.AskLoginRewardGetted_Respond;

        /**
         * Encodes the specified AskLoginRewardGetted_Respond message. Does not implicitly {@link Protocol.AskLoginRewardGetted_Respond.verify|verify} messages.
         * @param message AskLoginRewardGetted_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAskLoginRewardGetted_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AskLoginRewardGetted_Respond message, length delimited. Does not implicitly {@link Protocol.AskLoginRewardGetted_Respond.verify|verify} messages.
         * @param message AskLoginRewardGetted_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAskLoginRewardGetted_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AskLoginRewardGetted_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AskLoginRewardGetted_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.AskLoginRewardGetted_Respond;

        /**
         * Decodes an AskLoginRewardGetted_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AskLoginRewardGetted_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.AskLoginRewardGetted_Respond;

        /**
         * Verifies an AskLoginRewardGetted_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GiftInfo_Respond. */
    interface IGiftInfo_Respond {

        /** GiftInfo_Respond infos */
        infos?: (Protocol.IGift[]|null);
    }

    /** Represents a GiftInfo_Respond. */
    class GiftInfo_Respond implements IGiftInfo_Respond {

        /**
         * Constructs a new GiftInfo_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGiftInfo_Respond);

        /** GiftInfo_Respond infos. */
        public infos: Protocol.IGift[];

        /**
         * Creates a new GiftInfo_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GiftInfo_Respond instance
         */
        public static create(properties?: Protocol.IGiftInfo_Respond): Protocol.GiftInfo_Respond;

        /**
         * Encodes the specified GiftInfo_Respond message. Does not implicitly {@link Protocol.GiftInfo_Respond.verify|verify} messages.
         * @param message GiftInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGiftInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GiftInfo_Respond message, length delimited. Does not implicitly {@link Protocol.GiftInfo_Respond.verify|verify} messages.
         * @param message GiftInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGiftInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GiftInfo_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiftInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GiftInfo_Respond;

        /**
         * Decodes a GiftInfo_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GiftInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GiftInfo_Respond;

        /**
         * Verifies a GiftInfo_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyGift_Request. */
    interface IBuyGift_Request {

        /** BuyGift_Request type */
        type?: (number|null);

        /** BuyGift_Request giftId */
        giftId?: (number|null);

        /** BuyGift_Request treasureId */
        treasureId?: (number|null);
    }

    /** Represents a BuyGift_Request. */
    class BuyGift_Request implements IBuyGift_Request {

        /**
         * Constructs a new BuyGift_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyGift_Request);

        /** BuyGift_Request type. */
        public type: number;

        /** BuyGift_Request giftId. */
        public giftId: number;

        /** BuyGift_Request treasureId. */
        public treasureId: number;

        /**
         * Creates a new BuyGift_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyGift_Request instance
         */
        public static create(properties?: Protocol.IBuyGift_Request): Protocol.BuyGift_Request;

        /**
         * Encodes the specified BuyGift_Request message. Does not implicitly {@link Protocol.BuyGift_Request.verify|verify} messages.
         * @param message BuyGift_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyGift_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyGift_Request message, length delimited. Does not implicitly {@link Protocol.BuyGift_Request.verify|verify} messages.
         * @param message BuyGift_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyGift_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyGift_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyGift_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyGift_Request;

        /**
         * Decodes a BuyGift_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyGift_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyGift_Request;

        /**
         * Verifies a BuyGift_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyGift_Respond. */
    interface IBuyGift_Respond {

        /** BuyGift_Respond ret */
        ret?: (number|null);

        /** BuyGift_Respond type */
        type?: (number|null);

        /** BuyGift_Respond giftId */
        giftId?: (number|null);

        /** BuyGift_Respond treasureId */
        treasureId?: (number|null);
    }

    /** Represents a BuyGift_Respond. */
    class BuyGift_Respond implements IBuyGift_Respond {

        /**
         * Constructs a new BuyGift_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyGift_Respond);

        /** BuyGift_Respond ret. */
        public ret: number;

        /** BuyGift_Respond type. */
        public type: number;

        /** BuyGift_Respond giftId. */
        public giftId: number;

        /** BuyGift_Respond treasureId. */
        public treasureId: number;

        /**
         * Creates a new BuyGift_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyGift_Respond instance
         */
        public static create(properties?: Protocol.IBuyGift_Respond): Protocol.BuyGift_Respond;

        /**
         * Encodes the specified BuyGift_Respond message. Does not implicitly {@link Protocol.BuyGift_Respond.verify|verify} messages.
         * @param message BuyGift_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyGift_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyGift_Respond message, length delimited. Does not implicitly {@link Protocol.BuyGift_Respond.verify|verify} messages.
         * @param message BuyGift_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyGift_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyGift_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyGift_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyGift_Respond;

        /**
         * Decodes a BuyGift_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyGift_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyGift_Respond;

        /**
         * Verifies a BuyGift_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Rewards_Respond. */
    interface IRewards_Respond {

        /** Rewards_Respond rewards */
        rewards?: (Protocol.IReward[]|null);
    }

    /** Represents a Rewards_Respond. */
    class Rewards_Respond implements IRewards_Respond {

        /**
         * Constructs a new Rewards_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IRewards_Respond);

        /** Rewards_Respond rewards. */
        public rewards: Protocol.IReward[];

        /**
         * Creates a new Rewards_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rewards_Respond instance
         */
        public static create(properties?: Protocol.IRewards_Respond): Protocol.Rewards_Respond;

        /**
         * Encodes the specified Rewards_Respond message. Does not implicitly {@link Protocol.Rewards_Respond.verify|verify} messages.
         * @param message Rewards_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IRewards_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Rewards_Respond message, length delimited. Does not implicitly {@link Protocol.Rewards_Respond.verify|verify} messages.
         * @param message Rewards_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IRewards_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Rewards_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rewards_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Rewards_Respond;

        /**
         * Decodes a Rewards_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rewards_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Rewards_Respond;

        /**
         * Verifies a Rewards_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Guide_Request. */
    interface IGuide_Request {

        /** Guide_Request name */
        name?: (string|null);
    }

    /** Represents a Guide_Request. */
    class Guide_Request implements IGuide_Request {

        /**
         * Constructs a new Guide_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGuide_Request);

        /** Guide_Request name. */
        public name: string;

        /**
         * Creates a new Guide_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Guide_Request instance
         */
        public static create(properties?: Protocol.IGuide_Request): Protocol.Guide_Request;

        /**
         * Encodes the specified Guide_Request message. Does not implicitly {@link Protocol.Guide_Request.verify|verify} messages.
         * @param message Guide_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGuide_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Guide_Request message, length delimited. Does not implicitly {@link Protocol.Guide_Request.verify|verify} messages.
         * @param message Guide_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGuide_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Guide_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Guide_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Guide_Request;

        /**
         * Decodes a Guide_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Guide_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Guide_Request;

        /**
         * Verifies a Guide_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Guide_Respond. */
    interface IGuide_Respond {

        /** Guide_Respond list */
        list?: (string[]|null);
    }

    /** Represents a Guide_Respond. */
    class Guide_Respond implements IGuide_Respond {

        /**
         * Constructs a new Guide_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGuide_Respond);

        /** Guide_Respond list. */
        public list: string[];

        /**
         * Creates a new Guide_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Guide_Respond instance
         */
        public static create(properties?: Protocol.IGuide_Respond): Protocol.Guide_Respond;

        /**
         * Encodes the specified Guide_Respond message. Does not implicitly {@link Protocol.Guide_Respond.verify|verify} messages.
         * @param message Guide_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGuide_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Guide_Respond message, length delimited. Does not implicitly {@link Protocol.Guide_Respond.verify|verify} messages.
         * @param message Guide_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGuide_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Guide_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Guide_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Guide_Respond;

        /**
         * Decodes a Guide_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Guide_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Guide_Respond;

        /**
         * Verifies a Guide_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FinishRecharge_Respond. */
    interface IFinishRecharge_Respond {

        /** FinishRecharge_Respond uniqueCode */
        uniqueCode?: (string|null);
    }

    /** Represents a FinishRecharge_Respond. */
    class FinishRecharge_Respond implements IFinishRecharge_Respond {

        /**
         * Constructs a new FinishRecharge_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFinishRecharge_Respond);

        /** FinishRecharge_Respond uniqueCode. */
        public uniqueCode: string;

        /**
         * Creates a new FinishRecharge_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FinishRecharge_Respond instance
         */
        public static create(properties?: Protocol.IFinishRecharge_Respond): Protocol.FinishRecharge_Respond;

        /**
         * Encodes the specified FinishRecharge_Respond message. Does not implicitly {@link Protocol.FinishRecharge_Respond.verify|verify} messages.
         * @param message FinishRecharge_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFinishRecharge_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FinishRecharge_Respond message, length delimited. Does not implicitly {@link Protocol.FinishRecharge_Respond.verify|verify} messages.
         * @param message FinishRecharge_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFinishRecharge_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FinishRecharge_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FinishRecharge_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FinishRecharge_Respond;

        /**
         * Decodes a FinishRecharge_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FinishRecharge_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FinishRecharge_Respond;

        /**
         * Verifies a FinishRecharge_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetFirstRechargeReward_Request. */
    interface IGetFirstRechargeReward_Request {
    }

    /** Represents a GetFirstRechargeReward_Request. */
    class GetFirstRechargeReward_Request implements IGetFirstRechargeReward_Request {

        /**
         * Constructs a new GetFirstRechargeReward_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetFirstRechargeReward_Request);

        /**
         * Creates a new GetFirstRechargeReward_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFirstRechargeReward_Request instance
         */
        public static create(properties?: Protocol.IGetFirstRechargeReward_Request): Protocol.GetFirstRechargeReward_Request;

        /**
         * Encodes the specified GetFirstRechargeReward_Request message. Does not implicitly {@link Protocol.GetFirstRechargeReward_Request.verify|verify} messages.
         * @param message GetFirstRechargeReward_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetFirstRechargeReward_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetFirstRechargeReward_Request message, length delimited. Does not implicitly {@link Protocol.GetFirstRechargeReward_Request.verify|verify} messages.
         * @param message GetFirstRechargeReward_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetFirstRechargeReward_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetFirstRechargeReward_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFirstRechargeReward_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetFirstRechargeReward_Request;

        /**
         * Decodes a GetFirstRechargeReward_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFirstRechargeReward_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetFirstRechargeReward_Request;

        /**
         * Verifies a GetFirstRechargeReward_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TiantiRewardInfo_Request. */
    interface ITiantiRewardInfo_Request {
    }

    /** Represents a TiantiRewardInfo_Request. */
    class TiantiRewardInfo_Request implements ITiantiRewardInfo_Request {

        /**
         * Constructs a new TiantiRewardInfo_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ITiantiRewardInfo_Request);

        /**
         * Creates a new TiantiRewardInfo_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TiantiRewardInfo_Request instance
         */
        public static create(properties?: Protocol.ITiantiRewardInfo_Request): Protocol.TiantiRewardInfo_Request;

        /**
         * Encodes the specified TiantiRewardInfo_Request message. Does not implicitly {@link Protocol.TiantiRewardInfo_Request.verify|verify} messages.
         * @param message TiantiRewardInfo_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ITiantiRewardInfo_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TiantiRewardInfo_Request message, length delimited. Does not implicitly {@link Protocol.TiantiRewardInfo_Request.verify|verify} messages.
         * @param message TiantiRewardInfo_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ITiantiRewardInfo_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TiantiRewardInfo_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TiantiRewardInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.TiantiRewardInfo_Request;

        /**
         * Decodes a TiantiRewardInfo_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TiantiRewardInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.TiantiRewardInfo_Request;

        /**
         * Verifies a TiantiRewardInfo_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TiantiGetted. */
    interface ITiantiGetted {

        /** TiantiGetted classlv */
        classlv?: (number|null);

        /** TiantiGetted index */
        index?: (number|null);
    }

    /** Represents a TiantiGetted. */
    class TiantiGetted implements ITiantiGetted {

        /**
         * Constructs a new TiantiGetted.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ITiantiGetted);

        /** TiantiGetted classlv. */
        public classlv: number;

        /** TiantiGetted index. */
        public index: number;

        /**
         * Creates a new TiantiGetted instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TiantiGetted instance
         */
        public static create(properties?: Protocol.ITiantiGetted): Protocol.TiantiGetted;

        /**
         * Encodes the specified TiantiGetted message. Does not implicitly {@link Protocol.TiantiGetted.verify|verify} messages.
         * @param message TiantiGetted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ITiantiGetted, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TiantiGetted message, length delimited. Does not implicitly {@link Protocol.TiantiGetted.verify|verify} messages.
         * @param message TiantiGetted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ITiantiGetted, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TiantiGetted message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TiantiGetted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.TiantiGetted;

        /**
         * Decodes a TiantiGetted message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TiantiGetted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.TiantiGetted;

        /**
         * Verifies a TiantiGetted message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TiantiRewardInfo_Respond. */
    interface ITiantiRewardInfo_Respond {

        /** TiantiRewardInfo_Respond infos */
        infos?: (Protocol.ITiantiGetted[]|null);
    }

    /** Represents a TiantiRewardInfo_Respond. */
    class TiantiRewardInfo_Respond implements ITiantiRewardInfo_Respond {

        /**
         * Constructs a new TiantiRewardInfo_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ITiantiRewardInfo_Respond);

        /** TiantiRewardInfo_Respond infos. */
        public infos: Protocol.ITiantiGetted[];

        /**
         * Creates a new TiantiRewardInfo_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TiantiRewardInfo_Respond instance
         */
        public static create(properties?: Protocol.ITiantiRewardInfo_Respond): Protocol.TiantiRewardInfo_Respond;

        /**
         * Encodes the specified TiantiRewardInfo_Respond message. Does not implicitly {@link Protocol.TiantiRewardInfo_Respond.verify|verify} messages.
         * @param message TiantiRewardInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ITiantiRewardInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TiantiRewardInfo_Respond message, length delimited. Does not implicitly {@link Protocol.TiantiRewardInfo_Respond.verify|verify} messages.
         * @param message TiantiRewardInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ITiantiRewardInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TiantiRewardInfo_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TiantiRewardInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.TiantiRewardInfo_Respond;

        /**
         * Decodes a TiantiRewardInfo_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TiantiRewardInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.TiantiRewardInfo_Respond;

        /**
         * Verifies a TiantiRewardInfo_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetTiantiReward_Request. */
    interface IGetTiantiReward_Request {

        /** GetTiantiReward_Request classlv */
        classlv?: (number|null);

        /** GetTiantiReward_Request index */
        index?: (number|null);
    }

    /** Represents a GetTiantiReward_Request. */
    class GetTiantiReward_Request implements IGetTiantiReward_Request {

        /**
         * Constructs a new GetTiantiReward_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetTiantiReward_Request);

        /** GetTiantiReward_Request classlv. */
        public classlv: number;

        /** GetTiantiReward_Request index. */
        public index: number;

        /**
         * Creates a new GetTiantiReward_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTiantiReward_Request instance
         */
        public static create(properties?: Protocol.IGetTiantiReward_Request): Protocol.GetTiantiReward_Request;

        /**
         * Encodes the specified GetTiantiReward_Request message. Does not implicitly {@link Protocol.GetTiantiReward_Request.verify|verify} messages.
         * @param message GetTiantiReward_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetTiantiReward_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetTiantiReward_Request message, length delimited. Does not implicitly {@link Protocol.GetTiantiReward_Request.verify|verify} messages.
         * @param message GetTiantiReward_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetTiantiReward_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetTiantiReward_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTiantiReward_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetTiantiReward_Request;

        /**
         * Decodes a GetTiantiReward_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTiantiReward_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetTiantiReward_Request;

        /**
         * Verifies a GetTiantiReward_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetTiantiReward_Respond. */
    interface IGetTiantiReward_Respond {

        /** GetTiantiReward_Respond ret */
        ret?: (number|null);

        /** GetTiantiReward_Respond classlv */
        classlv?: (number|null);

        /** GetTiantiReward_Respond index */
        index?: (number|null);
    }

    /** Represents a GetTiantiReward_Respond. */
    class GetTiantiReward_Respond implements IGetTiantiReward_Respond {

        /**
         * Constructs a new GetTiantiReward_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetTiantiReward_Respond);

        /** GetTiantiReward_Respond ret. */
        public ret: number;

        /** GetTiantiReward_Respond classlv. */
        public classlv: number;

        /** GetTiantiReward_Respond index. */
        public index: number;

        /**
         * Creates a new GetTiantiReward_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTiantiReward_Respond instance
         */
        public static create(properties?: Protocol.IGetTiantiReward_Respond): Protocol.GetTiantiReward_Respond;

        /**
         * Encodes the specified GetTiantiReward_Respond message. Does not implicitly {@link Protocol.GetTiantiReward_Respond.verify|verify} messages.
         * @param message GetTiantiReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetTiantiReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetTiantiReward_Respond message, length delimited. Does not implicitly {@link Protocol.GetTiantiReward_Respond.verify|verify} messages.
         * @param message GetTiantiReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetTiantiReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetTiantiReward_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTiantiReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetTiantiReward_Respond;

        /**
         * Decodes a GetTiantiReward_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTiantiReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetTiantiReward_Respond;

        /**
         * Verifies a GetTiantiReward_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a WarEvent. */
    interface IWarEvent {

        /** WarEvent cardId */
        cardId?: (number|null);

        /** WarEvent count */
        count?: (number|null);
    }

    /** Represents a WarEvent. */
    class WarEvent implements IWarEvent {

        /**
         * Constructs a new WarEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IWarEvent);

        /** WarEvent cardId. */
        public cardId: number;

        /** WarEvent count. */
        public count: number;

        /**
         * Creates a new WarEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarEvent instance
         */
        public static create(properties?: Protocol.IWarEvent): Protocol.WarEvent;

        /**
         * Encodes the specified WarEvent message. Does not implicitly {@link Protocol.WarEvent.verify|verify} messages.
         * @param message WarEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IWarEvent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WarEvent message, length delimited. Does not implicitly {@link Protocol.WarEvent.verify|verify} messages.
         * @param message WarEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IWarEvent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WarEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.WarEvent;

        /**
         * Decodes a WarEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.WarEvent;

        /**
         * Verifies a WarEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NoticeWarEvent_Request. */
    interface INoticeWarEvent_Request {

        /** NoticeWarEvent_Request info */
        info?: (Protocol.IWarEvent[]|null);
    }

    /** Represents a NoticeWarEvent_Request. */
    class NoticeWarEvent_Request implements INoticeWarEvent_Request {

        /**
         * Constructs a new NoticeWarEvent_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.INoticeWarEvent_Request);

        /** NoticeWarEvent_Request info. */
        public info: Protocol.IWarEvent[];

        /**
         * Creates a new NoticeWarEvent_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoticeWarEvent_Request instance
         */
        public static create(properties?: Protocol.INoticeWarEvent_Request): Protocol.NoticeWarEvent_Request;

        /**
         * Encodes the specified NoticeWarEvent_Request message. Does not implicitly {@link Protocol.NoticeWarEvent_Request.verify|verify} messages.
         * @param message NoticeWarEvent_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.INoticeWarEvent_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NoticeWarEvent_Request message, length delimited. Does not implicitly {@link Protocol.NoticeWarEvent_Request.verify|verify} messages.
         * @param message NoticeWarEvent_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.INoticeWarEvent_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NoticeWarEvent_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoticeWarEvent_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.NoticeWarEvent_Request;

        /**
         * Decodes a NoticeWarEvent_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoticeWarEvent_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.NoticeWarEvent_Request;

        /**
         * Verifies a NoticeWarEvent_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetFamilyRank_Request. */
    interface IGetFamilyRank_Request {
    }

    /** Represents a GetFamilyRank_Request. */
    class GetFamilyRank_Request implements IGetFamilyRank_Request {

        /**
         * Constructs a new GetFamilyRank_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetFamilyRank_Request);

        /**
         * Creates a new GetFamilyRank_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFamilyRank_Request instance
         */
        public static create(properties?: Protocol.IGetFamilyRank_Request): Protocol.GetFamilyRank_Request;

        /**
         * Encodes the specified GetFamilyRank_Request message. Does not implicitly {@link Protocol.GetFamilyRank_Request.verify|verify} messages.
         * @param message GetFamilyRank_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetFamilyRank_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetFamilyRank_Request message, length delimited. Does not implicitly {@link Protocol.GetFamilyRank_Request.verify|verify} messages.
         * @param message GetFamilyRank_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetFamilyRank_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetFamilyRank_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFamilyRank_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetFamilyRank_Request;

        /**
         * Decodes a GetFamilyRank_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFamilyRank_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetFamilyRank_Request;

        /**
         * Verifies a GetFamilyRank_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetFamilyRank_Respond. */
    interface IGetFamilyRank_Respond {

        /** GetFamilyRank_Respond infos */
        infos?: (Protocol.IFamilyInfo[]|null);
    }

    /** Represents a GetFamilyRank_Respond. */
    class GetFamilyRank_Respond implements IGetFamilyRank_Respond {

        /**
         * Constructs a new GetFamilyRank_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetFamilyRank_Respond);

        /** GetFamilyRank_Respond infos. */
        public infos: Protocol.IFamilyInfo[];

        /**
         * Creates a new GetFamilyRank_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFamilyRank_Respond instance
         */
        public static create(properties?: Protocol.IGetFamilyRank_Respond): Protocol.GetFamilyRank_Respond;

        /**
         * Encodes the specified GetFamilyRank_Respond message. Does not implicitly {@link Protocol.GetFamilyRank_Respond.verify|verify} messages.
         * @param message GetFamilyRank_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetFamilyRank_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetFamilyRank_Respond message, length delimited. Does not implicitly {@link Protocol.GetFamilyRank_Respond.verify|verify} messages.
         * @param message GetFamilyRank_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetFamilyRank_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetFamilyRank_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFamilyRank_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetFamilyRank_Respond;

        /**
         * Decodes a GetFamilyRank_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFamilyRank_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetFamilyRank_Respond;

        /**
         * Verifies a GetFamilyRank_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a KickOut_Respond. */
    interface IKickOut_Respond {

        /** KickOut_Respond type */
        type?: (number|null);
    }

    /** Represents a KickOut_Respond. */
    class KickOut_Respond implements IKickOut_Respond {

        /**
         * Constructs a new KickOut_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IKickOut_Respond);

        /** KickOut_Respond type. */
        public type: number;

        /**
         * Creates a new KickOut_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickOut_Respond instance
         */
        public static create(properties?: Protocol.IKickOut_Respond): Protocol.KickOut_Respond;

        /**
         * Encodes the specified KickOut_Respond message. Does not implicitly {@link Protocol.KickOut_Respond.verify|verify} messages.
         * @param message KickOut_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IKickOut_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified KickOut_Respond message, length delimited. Does not implicitly {@link Protocol.KickOut_Respond.verify|verify} messages.
         * @param message KickOut_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IKickOut_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KickOut_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickOut_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.KickOut_Respond;

        /**
         * Decodes a KickOut_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickOut_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.KickOut_Respond;

        /**
         * Verifies a KickOut_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ChangeRolePic_Request. */
    interface IChangeRolePic_Request {

        /** ChangeRolePic_Request rolePic */
        rolePic?: (number|null);
    }

    /** Represents a ChangeRolePic_Request. */
    class ChangeRolePic_Request implements IChangeRolePic_Request {

        /**
         * Constructs a new ChangeRolePic_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IChangeRolePic_Request);

        /** ChangeRolePic_Request rolePic. */
        public rolePic: number;

        /**
         * Creates a new ChangeRolePic_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeRolePic_Request instance
         */
        public static create(properties?: Protocol.IChangeRolePic_Request): Protocol.ChangeRolePic_Request;

        /**
         * Encodes the specified ChangeRolePic_Request message. Does not implicitly {@link Protocol.ChangeRolePic_Request.verify|verify} messages.
         * @param message ChangeRolePic_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IChangeRolePic_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChangeRolePic_Request message, length delimited. Does not implicitly {@link Protocol.ChangeRolePic_Request.verify|verify} messages.
         * @param message ChangeRolePic_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IChangeRolePic_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChangeRolePic_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeRolePic_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.ChangeRolePic_Request;

        /**
         * Decodes a ChangeRolePic_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeRolePic_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.ChangeRolePic_Request;

        /**
         * Verifies a ChangeRolePic_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ChangeRolePic_Respond. */
    interface IChangeRolePic_Respond {

        /** ChangeRolePic_Respond ret */
        ret?: (number|null);

        /** ChangeRolePic_Respond rolePic */
        rolePic?: (number|null);
    }

    /** Represents a ChangeRolePic_Respond. */
    class ChangeRolePic_Respond implements IChangeRolePic_Respond {

        /**
         * Constructs a new ChangeRolePic_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IChangeRolePic_Respond);

        /** ChangeRolePic_Respond ret. */
        public ret: number;

        /** ChangeRolePic_Respond rolePic. */
        public rolePic: number;

        /**
         * Creates a new ChangeRolePic_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeRolePic_Respond instance
         */
        public static create(properties?: Protocol.IChangeRolePic_Respond): Protocol.ChangeRolePic_Respond;

        /**
         * Encodes the specified ChangeRolePic_Respond message. Does not implicitly {@link Protocol.ChangeRolePic_Respond.verify|verify} messages.
         * @param message ChangeRolePic_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IChangeRolePic_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChangeRolePic_Respond message, length delimited. Does not implicitly {@link Protocol.ChangeRolePic_Respond.verify|verify} messages.
         * @param message ChangeRolePic_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IChangeRolePic_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChangeRolePic_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeRolePic_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.ChangeRolePic_Respond;

        /**
         * Decodes a ChangeRolePic_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeRolePic_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.ChangeRolePic_Respond;

        /**
         * Verifies a ChangeRolePic_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetCodeReward_Request. */
    interface IGetCodeReward_Request {

        /** GetCodeReward_Request code */
        code?: (string|null);
    }

    /** Represents a GetCodeReward_Request. */
    class GetCodeReward_Request implements IGetCodeReward_Request {

        /**
         * Constructs a new GetCodeReward_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetCodeReward_Request);

        /** GetCodeReward_Request code. */
        public code: string;

        /**
         * Creates a new GetCodeReward_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCodeReward_Request instance
         */
        public static create(properties?: Protocol.IGetCodeReward_Request): Protocol.GetCodeReward_Request;

        /**
         * Encodes the specified GetCodeReward_Request message. Does not implicitly {@link Protocol.GetCodeReward_Request.verify|verify} messages.
         * @param message GetCodeReward_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetCodeReward_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetCodeReward_Request message, length delimited. Does not implicitly {@link Protocol.GetCodeReward_Request.verify|verify} messages.
         * @param message GetCodeReward_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetCodeReward_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetCodeReward_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCodeReward_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetCodeReward_Request;

        /**
         * Decodes a GetCodeReward_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCodeReward_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetCodeReward_Request;

        /**
         * Verifies a GetCodeReward_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetCodeReward_Respond. */
    interface IGetCodeReward_Respond {

        /** GetCodeReward_Respond ret */
        ret?: (number|null);
    }

    /** Represents a GetCodeReward_Respond. */
    class GetCodeReward_Respond implements IGetCodeReward_Respond {

        /**
         * Constructs a new GetCodeReward_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetCodeReward_Respond);

        /** GetCodeReward_Respond ret. */
        public ret: number;

        /**
         * Creates a new GetCodeReward_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCodeReward_Respond instance
         */
        public static create(properties?: Protocol.IGetCodeReward_Respond): Protocol.GetCodeReward_Respond;

        /**
         * Encodes the specified GetCodeReward_Respond message. Does not implicitly {@link Protocol.GetCodeReward_Respond.verify|verify} messages.
         * @param message GetCodeReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetCodeReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetCodeReward_Respond message, length delimited. Does not implicitly {@link Protocol.GetCodeReward_Respond.verify|verify} messages.
         * @param message GetCodeReward_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetCodeReward_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetCodeReward_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCodeReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetCodeReward_Respond;

        /**
         * Decodes a GetCodeReward_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCodeReward_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetCodeReward_Respond;

        /**
         * Verifies a GetCodeReward_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetServerNotice_Request. */
    interface IGetServerNotice_Request {
    }

    /** Represents a GetServerNotice_Request. */
    class GetServerNotice_Request implements IGetServerNotice_Request {

        /**
         * Constructs a new GetServerNotice_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetServerNotice_Request);

        /**
         * Creates a new GetServerNotice_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetServerNotice_Request instance
         */
        public static create(properties?: Protocol.IGetServerNotice_Request): Protocol.GetServerNotice_Request;

        /**
         * Encodes the specified GetServerNotice_Request message. Does not implicitly {@link Protocol.GetServerNotice_Request.verify|verify} messages.
         * @param message GetServerNotice_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetServerNotice_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetServerNotice_Request message, length delimited. Does not implicitly {@link Protocol.GetServerNotice_Request.verify|verify} messages.
         * @param message GetServerNotice_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetServerNotice_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetServerNotice_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetServerNotice_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetServerNotice_Request;

        /**
         * Decodes a GetServerNotice_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetServerNotice_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetServerNotice_Request;

        /**
         * Verifies a GetServerNotice_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetServerNotice_Respond. */
    interface IGetServerNotice_Respond {

        /** GetServerNotice_Respond notices */
        notices?: (string[]|null);
    }

    /** Represents a GetServerNotice_Respond. */
    class GetServerNotice_Respond implements IGetServerNotice_Respond {

        /**
         * Constructs a new GetServerNotice_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGetServerNotice_Respond);

        /** GetServerNotice_Respond notices. */
        public notices: string[];

        /**
         * Creates a new GetServerNotice_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetServerNotice_Respond instance
         */
        public static create(properties?: Protocol.IGetServerNotice_Respond): Protocol.GetServerNotice_Respond;

        /**
         * Encodes the specified GetServerNotice_Respond message. Does not implicitly {@link Protocol.GetServerNotice_Respond.verify|verify} messages.
         * @param message GetServerNotice_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGetServerNotice_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetServerNotice_Respond message, length delimited. Does not implicitly {@link Protocol.GetServerNotice_Respond.verify|verify} messages.
         * @param message GetServerNotice_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGetServerNotice_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetServerNotice_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetServerNotice_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.GetServerNotice_Respond;

        /**
         * Decodes a GetServerNotice_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetServerNotice_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.GetServerNotice_Respond;

        /**
         * Verifies a GetServerNotice_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MatchInfo. */
    interface IMatchInfo {

        /** MatchInfo roleId */
        roleId?: (number|Long|null);

        /** MatchInfo name */
        name?: (string|null);

        /** MatchInfo level */
        level?: (number|null);

        /** MatchInfo serverId */
        serverId?: (number|null);

        /** MatchInfo pos */
        pos?: (number|null);

        /** MatchInfo heros */
        heros?: (Protocol.IHero[]|null);

        /** MatchInfo type */
        type?: (number|null);

        /** MatchInfo isRobot */
        isRobot?: (boolean|null);

        /** MatchInfo lineUp */
        lineUp?: (number[]|null);

        /** MatchInfo familyName */
        familyName?: (string|null);

        /** MatchInfo iconName */
        iconName?: (string|null);

        /** MatchInfo edgeId */
        edgeId?: (number|null);

        /** MatchInfo cups */
        cups?: (number|null);

        /** MatchInfo classLevel */
        classLevel?: (number|null);

        /** MatchInfo rolePic */
        rolePic?: (number|null);
    }

    /** Represents a MatchInfo. */
    class MatchInfo implements IMatchInfo {

        /**
         * Constructs a new MatchInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IMatchInfo);

        /** MatchInfo roleId. */
        public roleId: (number|Long);

        /** MatchInfo name. */
        public name: string;

        /** MatchInfo level. */
        public level: number;

        /** MatchInfo serverId. */
        public serverId: number;

        /** MatchInfo pos. */
        public pos: number;

        /** MatchInfo heros. */
        public heros: Protocol.IHero[];

        /** MatchInfo type. */
        public type: number;

        /** MatchInfo isRobot. */
        public isRobot: boolean;

        /** MatchInfo lineUp. */
        public lineUp: number[];

        /** MatchInfo familyName. */
        public familyName: string;

        /** MatchInfo iconName. */
        public iconName: string;

        /** MatchInfo edgeId. */
        public edgeId: number;

        /** MatchInfo cups. */
        public cups: number;

        /** MatchInfo classLevel. */
        public classLevel: number;

        /** MatchInfo rolePic. */
        public rolePic: number;

        /**
         * Creates a new MatchInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchInfo instance
         */
        public static create(properties?: Protocol.IMatchInfo): Protocol.MatchInfo;

        /**
         * Encodes the specified MatchInfo message. Does not implicitly {@link Protocol.MatchInfo.verify|verify} messages.
         * @param message MatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IMatchInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MatchInfo message, length delimited. Does not implicitly {@link Protocol.MatchInfo.verify|verify} messages.
         * @param message MatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IMatchInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MatchInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.MatchInfo;

        /**
         * Decodes a MatchInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.MatchInfo;

        /**
         * Verifies a MatchInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Hero. */
    interface IHero {

        /** Hero index */
        index?: (number|null);

        /** Hero level */
        level?: (number|null);

        /** Hero goldLevel */
        goldLevel?: (number|null);

        /** Hero count */
        count?: (number|null);
    }

    /** Represents a Hero. */
    class Hero implements IHero {

        /**
         * Constructs a new Hero.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IHero);

        /** Hero index. */
        public index: number;

        /** Hero level. */
        public level: number;

        /** Hero goldLevel. */
        public goldLevel: number;

        /** Hero count. */
        public count: number;

        /**
         * Creates a new Hero instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hero instance
         */
        public static create(properties?: Protocol.IHero): Protocol.Hero;

        /**
         * Encodes the specified Hero message. Does not implicitly {@link Protocol.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IHero, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Hero message, length delimited. Does not implicitly {@link Protocol.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IHero, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Hero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Hero;

        /**
         * Decodes a Hero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Hero;

        /**
         * Verifies a Hero message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FightRoomInfo_Respond. */
    interface IFightRoomInfo_Respond {

        /** FightRoomInfo_Respond infos */
        infos?: (Protocol.IMatchInfo[]|null);

        /** FightRoomInfo_Respond fightIp */
        fightIp?: (string|null);

        /** FightRoomInfo_Respond secrete */
        secrete?: (string|null);

        /** FightRoomInfo_Respond roomId */
        roomId?: (string|null);

        /** FightRoomInfo_Respond type */
        type?: (number|null);

        /** FightRoomInfo_Respond mapID */
        mapID?: (number|null);

        /** FightRoomInfo_Respond classLevel */
        classLevel?: (number|null);
    }

    /** Represents a FightRoomInfo_Respond. */
    class FightRoomInfo_Respond implements IFightRoomInfo_Respond {

        /**
         * Constructs a new FightRoomInfo_Respond.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFightRoomInfo_Respond);

        /** FightRoomInfo_Respond infos. */
        public infos: Protocol.IMatchInfo[];

        /** FightRoomInfo_Respond fightIp. */
        public fightIp: string;

        /** FightRoomInfo_Respond secrete. */
        public secrete: string;

        /** FightRoomInfo_Respond roomId. */
        public roomId: string;

        /** FightRoomInfo_Respond type. */
        public type: number;

        /** FightRoomInfo_Respond mapID. */
        public mapID: number;

        /** FightRoomInfo_Respond classLevel. */
        public classLevel: number;

        /**
         * Creates a new FightRoomInfo_Respond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FightRoomInfo_Respond instance
         */
        public static create(properties?: Protocol.IFightRoomInfo_Respond): Protocol.FightRoomInfo_Respond;

        /**
         * Encodes the specified FightRoomInfo_Respond message. Does not implicitly {@link Protocol.FightRoomInfo_Respond.verify|verify} messages.
         * @param message FightRoomInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFightRoomInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FightRoomInfo_Respond message, length delimited. Does not implicitly {@link Protocol.FightRoomInfo_Respond.verify|verify} messages.
         * @param message FightRoomInfo_Respond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFightRoomInfo_Respond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightRoomInfo_Respond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightRoomInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FightRoomInfo_Respond;

        /**
         * Decodes a FightRoomInfo_Respond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FightRoomInfo_Respond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FightRoomInfo_Respond;

        /**
         * Verifies a FightRoomInfo_Respond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SimpleHero. */
    interface ISimpleHero {

        /** SimpleHero index */
        index?: (number|null);

        /** SimpleHero level */
        level?: (number|null);
    }

    /** Represents a SimpleHero. */
    class SimpleHero implements ISimpleHero {

        /**
         * Constructs a new SimpleHero.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISimpleHero);

        /** SimpleHero index. */
        public index: number;

        /** SimpleHero level. */
        public level: number;

        /**
         * Creates a new SimpleHero instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SimpleHero instance
         */
        public static create(properties?: Protocol.ISimpleHero): Protocol.SimpleHero;

        /**
         * Encodes the specified SimpleHero message. Does not implicitly {@link Protocol.SimpleHero.verify|verify} messages.
         * @param message SimpleHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISimpleHero, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SimpleHero message, length delimited. Does not implicitly {@link Protocol.SimpleHero.verify|verify} messages.
         * @param message SimpleHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISimpleHero, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SimpleHero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SimpleHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SimpleHero;

        /**
         * Decodes a SimpleHero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SimpleHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SimpleHero;

        /**
         * Verifies a SimpleHero message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RankInfo. */
    interface IRankInfo {

        /** RankInfo roleName */
        roleName?: (string|null);

        /** RankInfo roleId */
        roleId?: (number|Long|null);

        /** RankInfo serverId */
        serverId?: (number|null);

        /** RankInfo cups */
        cups?: (number|null);

        /** RankInfo familyName */
        familyName?: (string|null);

        /** RankInfo rolePic */
        rolePic?: (number|null);

        /** RankInfo rank */
        rank?: (number|null);

        /** RankInfo level */
        level?: (number|null);

        /** RankInfo classLevel */
        classLevel?: (number|null);

        /** RankInfo heros */
        heros?: (Protocol.ISimpleHero[]|null);

        /** RankInfo familyId */
        familyId?: (string|null);
    }

    /** Represents a RankInfo. */
    class RankInfo implements IRankInfo {

        /**
         * Constructs a new RankInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IRankInfo);

        /** RankInfo roleName. */
        public roleName: string;

        /** RankInfo roleId. */
        public roleId: (number|Long);

        /** RankInfo serverId. */
        public serverId: number;

        /** RankInfo cups. */
        public cups: number;

        /** RankInfo familyName. */
        public familyName: string;

        /** RankInfo rolePic. */
        public rolePic: number;

        /** RankInfo rank. */
        public rank: number;

        /** RankInfo level. */
        public level: number;

        /** RankInfo classLevel. */
        public classLevel: number;

        /** RankInfo heros. */
        public heros: Protocol.ISimpleHero[];

        /** RankInfo familyId. */
        public familyId: string;

        /**
         * Creates a new RankInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankInfo instance
         */
        public static create(properties?: Protocol.IRankInfo): Protocol.RankInfo;

        /**
         * Encodes the specified RankInfo message. Does not implicitly {@link Protocol.RankInfo.verify|verify} messages.
         * @param message RankInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IRankInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankInfo message, length delimited. Does not implicitly {@link Protocol.RankInfo.verify|verify} messages.
         * @param message RankInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IRankInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.RankInfo;

        /**
         * Decodes a RankInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.RankInfo;

        /**
         * Verifies a RankInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Task. */
    interface ITask {

        /** Task taskId */
        taskId?: (number|null);

        /** Task finishCount */
        finishCount?: (number|null);

        /** Task isFinish */
        isFinish?: (boolean|null);

        /** Task finishTime */
        finishTime?: (number|Long|null);

        /** Task grid */
        grid?: (number|null);

        /** Task rewards */
        rewards?: (Protocol.IReward[]|null);
    }

    /** Represents a Task. */
    class Task implements ITask {

        /**
         * Constructs a new Task.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ITask);

        /** Task taskId. */
        public taskId: number;

        /** Task finishCount. */
        public finishCount: number;

        /** Task isFinish. */
        public isFinish: boolean;

        /** Task finishTime. */
        public finishTime: (number|Long);

        /** Task grid. */
        public grid: number;

        /** Task rewards. */
        public rewards: Protocol.IReward[];

        /**
         * Creates a new Task instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Task instance
         */
        public static create(properties?: Protocol.ITask): Protocol.Task;

        /**
         * Encodes the specified Task message. Does not implicitly {@link Protocol.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ITask, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Task message, length delimited. Does not implicitly {@link Protocol.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ITask, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Task;

        /**
         * Decodes a Task message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Task;

        /**
         * Verifies a Task message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Reward. */
    interface IReward {

        /** Reward type */
        type?: (number|null);

        /** Reward index */
        index?: (number|null);

        /** Reward count */
        count?: (number|null);
    }

    /** Represents a Reward. */
    class Reward implements IReward {

        /**
         * Constructs a new Reward.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IReward);

        /** Reward type. */
        public type: number;

        /** Reward index. */
        public index: number;

        /** Reward count. */
        public count: number;

        /**
         * Creates a new Reward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reward instance
         */
        public static create(properties?: Protocol.IReward): Protocol.Reward;

        /**
         * Encodes the specified Reward message. Does not implicitly {@link Protocol.Reward.verify|verify} messages.
         * @param message Reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IReward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Reward message, length delimited. Does not implicitly {@link Protocol.Reward.verify|verify} messages.
         * @param message Reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IReward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Reward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Reward;

        /**
         * Decodes a Reward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Reward;

        /**
         * Verifies a Reward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Friend. */
    interface IFriend {

        /** Friend roleId */
        roleId?: (number|Long|null);

        /** Friend name */
        name?: (string|null);

        /** Friend level */
        level?: (number|null);

        /** Friend cups */
        cups?: (number|null);

        /** Friend serverId */
        serverId?: (number|null);

        /** Friend iconName */
        iconName?: (string|null);

        /** Friend edgeId */
        edgeId?: (number|null);

        /** Friend state */
        state?: (boolean|null);

        /** Friend rolePic */
        rolePic?: (number|null);

        /** Friend familyName */
        familyName?: (string|null);
    }

    /** Represents a Friend. */
    class Friend implements IFriend {

        /**
         * Constructs a new Friend.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFriend);

        /** Friend roleId. */
        public roleId: (number|Long);

        /** Friend name. */
        public name: string;

        /** Friend level. */
        public level: number;

        /** Friend cups. */
        public cups: number;

        /** Friend serverId. */
        public serverId: number;

        /** Friend iconName. */
        public iconName: string;

        /** Friend edgeId. */
        public edgeId: number;

        /** Friend state. */
        public state: boolean;

        /** Friend rolePic. */
        public rolePic: number;

        /** Friend familyName. */
        public familyName: string;

        /**
         * Creates a new Friend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Friend instance
         */
        public static create(properties?: Protocol.IFriend): Protocol.Friend;

        /**
         * Encodes the specified Friend message. Does not implicitly {@link Protocol.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFriend, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Friend message, length delimited. Does not implicitly {@link Protocol.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFriend, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Friend;

        /**
         * Decodes a Friend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Friend;

        /**
         * Verifies a Friend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Invite. */
    interface IInvite {

        /** Invite from */
        from?: (Protocol.IFriend|null);

        /** Invite time */
        time?: (number|Long|null);
    }

    /** Represents an Invite. */
    class Invite implements IInvite {

        /**
         * Constructs a new Invite.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IInvite);

        /** Invite from. */
        public from?: (Protocol.IFriend|null);

        /** Invite time. */
        public time: (number|Long);

        /**
         * Creates a new Invite instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Invite instance
         */
        public static create(properties?: Protocol.IInvite): Protocol.Invite;

        /**
         * Encodes the specified Invite message. Does not implicitly {@link Protocol.Invite.verify|verify} messages.
         * @param message Invite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IInvite, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Invite message, length delimited. Does not implicitly {@link Protocol.Invite.verify|verify} messages.
         * @param message Invite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IInvite, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Invite message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Invite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Invite;

        /**
         * Decodes an Invite message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Invite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Invite;

        /**
         * Verifies an Invite message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Chat. */
    interface IChat {

        /** Chat content */
        content?: (string|null);

        /** Chat senderId */
        senderId?: (number|Long|null);

        /** Chat time */
        time?: (number|Long|null);

        /** Chat friendId */
        friendId?: (number|Long|null);

        /** Chat type */
        type?: (number|null);
    }

    /** Represents a Chat. */
    class Chat implements IChat {

        /**
         * Constructs a new Chat.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IChat);

        /** Chat content. */
        public content: string;

        /** Chat senderId. */
        public senderId: (number|Long);

        /** Chat time. */
        public time: (number|Long);

        /** Chat friendId. */
        public friendId: (number|Long);

        /** Chat type. */
        public type: number;

        /**
         * Creates a new Chat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chat instance
         */
        public static create(properties?: Protocol.IChat): Protocol.Chat;

        /**
         * Encodes the specified Chat message. Does not implicitly {@link Protocol.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link Protocol.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Chat;

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Chat;

        /**
         * Verifies a Chat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FamilyInfo. */
    interface IFamilyInfo {

        /** FamilyInfo familyId */
        familyId?: (string|null);

        /** FamilyInfo familyName */
        familyName?: (string|null);

        /** FamilyInfo familyPic */
        familyPic?: (number|null);

        /** FamilyInfo introduce */
        introduce?: (string|null);

        /** FamilyInfo count */
        count?: (number|null);

        /** FamilyInfo autoCup */
        autoCup?: (number|null);

        /** FamilyInfo power */
        power?: (number|null);

        /** FamilyInfo rolePic */
        rolePic?: (number|null);
    }

    /** Represents a FamilyInfo. */
    class FamilyInfo implements IFamilyInfo {

        /**
         * Constructs a new FamilyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFamilyInfo);

        /** FamilyInfo familyId. */
        public familyId: string;

        /** FamilyInfo familyName. */
        public familyName: string;

        /** FamilyInfo familyPic. */
        public familyPic: number;

        /** FamilyInfo introduce. */
        public introduce: string;

        /** FamilyInfo count. */
        public count: number;

        /** FamilyInfo autoCup. */
        public autoCup: number;

        /** FamilyInfo power. */
        public power: number;

        /** FamilyInfo rolePic. */
        public rolePic: number;

        /**
         * Creates a new FamilyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FamilyInfo instance
         */
        public static create(properties?: Protocol.IFamilyInfo): Protocol.FamilyInfo;

        /**
         * Encodes the specified FamilyInfo message. Does not implicitly {@link Protocol.FamilyInfo.verify|verify} messages.
         * @param message FamilyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFamilyInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FamilyInfo message, length delimited. Does not implicitly {@link Protocol.FamilyInfo.verify|verify} messages.
         * @param message FamilyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFamilyInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FamilyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FamilyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FamilyInfo;

        /**
         * Decodes a FamilyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FamilyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FamilyInfo;

        /**
         * Verifies a FamilyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FamilyMember. */
    interface IFamilyMember {

        /** FamilyMember roleId */
        roleId?: (number|Long|null);

        /** FamilyMember name */
        name?: (string|null);

        /** FamilyMember level */
        level?: (number|null);

        /** FamilyMember serverId */
        serverId?: (number|null);

        /** FamilyMember cups */
        cups?: (number|null);

        /** FamilyMember state */
        state?: (boolean|null);

        /** FamilyMember rolePic */
        rolePic?: (number|null);

        /** FamilyMember jobber */
        jobber?: (number|null);

        /** FamilyMember classLv */
        classLv?: (number|null);
    }

    /** Represents a FamilyMember. */
    class FamilyMember implements IFamilyMember {

        /**
         * Constructs a new FamilyMember.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFamilyMember);

        /** FamilyMember roleId. */
        public roleId: (number|Long);

        /** FamilyMember name. */
        public name: string;

        /** FamilyMember level. */
        public level: number;

        /** FamilyMember serverId. */
        public serverId: number;

        /** FamilyMember cups. */
        public cups: number;

        /** FamilyMember state. */
        public state: boolean;

        /** FamilyMember rolePic. */
        public rolePic: number;

        /** FamilyMember jobber. */
        public jobber: number;

        /** FamilyMember classLv. */
        public classLv: number;

        /**
         * Creates a new FamilyMember instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FamilyMember instance
         */
        public static create(properties?: Protocol.IFamilyMember): Protocol.FamilyMember;

        /**
         * Encodes the specified FamilyMember message. Does not implicitly {@link Protocol.FamilyMember.verify|verify} messages.
         * @param message FamilyMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFamilyMember, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FamilyMember message, length delimited. Does not implicitly {@link Protocol.FamilyMember.verify|verify} messages.
         * @param message FamilyMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFamilyMember, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FamilyMember message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FamilyMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FamilyMember;

        /**
         * Decodes a FamilyMember message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FamilyMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FamilyMember;

        /**
         * Verifies a FamilyMember message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FamilyChat. */
    interface IFamilyChat {

        /** FamilyChat content */
        content?: (string|null);

        /** FamilyChat type */
        type?: (number|null);

        /** FamilyChat sendTime */
        sendTime?: (number|Long|null);

        /** FamilyChat sender */
        sender?: (Protocol.IFamilyMember|null);
    }

    /** Represents a FamilyChat. */
    class FamilyChat implements IFamilyChat {

        /**
         * Constructs a new FamilyChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFamilyChat);

        /** FamilyChat content. */
        public content: string;

        /** FamilyChat type. */
        public type: number;

        /** FamilyChat sendTime. */
        public sendTime: (number|Long);

        /** FamilyChat sender. */
        public sender?: (Protocol.IFamilyMember|null);

        /**
         * Creates a new FamilyChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FamilyChat instance
         */
        public static create(properties?: Protocol.IFamilyChat): Protocol.FamilyChat;

        /**
         * Encodes the specified FamilyChat message. Does not implicitly {@link Protocol.FamilyChat.verify|verify} messages.
         * @param message FamilyChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFamilyChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FamilyChat message, length delimited. Does not implicitly {@link Protocol.FamilyChat.verify|verify} messages.
         * @param message FamilyChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFamilyChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FamilyChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FamilyChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FamilyChat;

        /**
         * Decodes a FamilyChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FamilyChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FamilyChat;

        /**
         * Verifies a FamilyChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyInfo. */
    interface IBuyInfo {

        /** BuyInfo hasBuyCount */
        hasBuyCount?: (number|null);

        /** BuyInfo treasureId */
        treasureId?: (number|null);
    }

    /** Represents a BuyInfo. */
    class BuyInfo implements IBuyInfo {

        /**
         * Constructs a new BuyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBuyInfo);

        /** BuyInfo hasBuyCount. */
        public hasBuyCount: number;

        /** BuyInfo treasureId. */
        public treasureId: number;

        /**
         * Creates a new BuyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyInfo instance
         */
        public static create(properties?: Protocol.IBuyInfo): Protocol.BuyInfo;

        /**
         * Encodes the specified BuyInfo message. Does not implicitly {@link Protocol.BuyInfo.verify|verify} messages.
         * @param message BuyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBuyInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyInfo message, length delimited. Does not implicitly {@link Protocol.BuyInfo.verify|verify} messages.
         * @param message BuyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBuyInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.BuyInfo;

        /**
         * Decodes a BuyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.BuyInfo;

        /**
         * Verifies a BuyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Action_Request. */
    interface IAction_Request {

        /** Action_Request roomId */
        roomId?: (string|null);

        /** Action_Request actionArray */
        actionArray?: (Uint8Array|null);
    }

    /** Represents an Action_Request. */
    class Action_Request implements IAction_Request {

        /**
         * Constructs a new Action_Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAction_Request);

        /** Action_Request roomId. */
        public roomId: string;

        /** Action_Request actionArray. */
        public actionArray: Uint8Array;

        /**
         * Creates a new Action_Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Action_Request instance
         */
        public static create(properties?: Protocol.IAction_Request): Protocol.Action_Request;

        /**
         * Encodes the specified Action_Request message. Does not implicitly {@link Protocol.Action_Request.verify|verify} messages.
         * @param message Action_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAction_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Action_Request message, length delimited. Does not implicitly {@link Protocol.Action_Request.verify|verify} messages.
         * @param message Action_Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAction_Request, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Action_Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Action_Request;

        /**
         * Decodes an Action_Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Action_Request;

        /**
         * Verifies an Action_Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Action_Response. */
    interface IAction_Response {

        /** Action_Response frame */
        frame?: (number|null);

        /** Action_Response actionArray */
        actionArray?: (Uint8Array[]|null);
    }

    /** Represents an Action_Response. */
    class Action_Response implements IAction_Response {

        /**
         * Constructs a new Action_Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IAction_Response);

        /** Action_Response frame. */
        public frame: number;

        /** Action_Response actionArray. */
        public actionArray: Uint8Array[];

        /**
         * Creates a new Action_Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Action_Response instance
         */
        public static create(properties?: Protocol.IAction_Response): Protocol.Action_Response;

        /**
         * Encodes the specified Action_Response message. Does not implicitly {@link Protocol.Action_Response.verify|verify} messages.
         * @param message Action_Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IAction_Response, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Action_Response message, length delimited. Does not implicitly {@link Protocol.Action_Response.verify|verify} messages.
         * @param message Action_Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IAction_Response, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Action_Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Action_Response;

        /**
         * Decodes an Action_Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Action_Response;

        /**
         * Verifies an Action_Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SimpleRecord. */
    interface ISimpleRecord {

        /** SimpleRecord index */
        index?: (number|null);

        /** SimpleRecord srcName */
        srcName?: (string|null);

        /** SimpleRecord srcRolePic */
        srcRolePic?: (number|null);

        /** SimpleRecord srcFamilyName */
        srcFamilyName?: (string|null);

        /** SimpleRecord decName */
        decName?: (string|null);

        /** SimpleRecord decRolePic */
        decRolePic?: (number|null);

        /** SimpleRecord decFamilyName */
        decFamilyName?: (string|null);

        /** SimpleRecord winSide */
        winSide?: (number|null);

        /** SimpleRecord srcHeros */
        srcHeros?: (Protocol.ISimpleHero[]|null);

        /** SimpleRecord decHeros */
        decHeros?: (Protocol.ISimpleHero[]|null);

        /** SimpleRecord srcRoleId */
        srcRoleId?: (number|Long|null);

        /** SimpleRecord decRoleId */
        decRoleId?: (number|Long|null);

        /** SimpleRecord time */
        time?: (number|Long|null);

        /** SimpleRecord winIds */
        winIds?: ((number|Long)[]|null);
    }

    /** Represents a SimpleRecord. */
    class SimpleRecord implements ISimpleRecord {

        /**
         * Constructs a new SimpleRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ISimpleRecord);

        /** SimpleRecord index. */
        public index: number;

        /** SimpleRecord srcName. */
        public srcName: string;

        /** SimpleRecord srcRolePic. */
        public srcRolePic: number;

        /** SimpleRecord srcFamilyName. */
        public srcFamilyName: string;

        /** SimpleRecord decName. */
        public decName: string;

        /** SimpleRecord decRolePic. */
        public decRolePic: number;

        /** SimpleRecord decFamilyName. */
        public decFamilyName: string;

        /** SimpleRecord winSide. */
        public winSide: number;

        /** SimpleRecord srcHeros. */
        public srcHeros: Protocol.ISimpleHero[];

        /** SimpleRecord decHeros. */
        public decHeros: Protocol.ISimpleHero[];

        /** SimpleRecord srcRoleId. */
        public srcRoleId: (number|Long);

        /** SimpleRecord decRoleId. */
        public decRoleId: (number|Long);

        /** SimpleRecord time. */
        public time: (number|Long);

        /** SimpleRecord winIds. */
        public winIds: (number|Long)[];

        /**
         * Creates a new SimpleRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SimpleRecord instance
         */
        public static create(properties?: Protocol.ISimpleRecord): Protocol.SimpleRecord;

        /**
         * Encodes the specified SimpleRecord message. Does not implicitly {@link Protocol.SimpleRecord.verify|verify} messages.
         * @param message SimpleRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ISimpleRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SimpleRecord message, length delimited. Does not implicitly {@link Protocol.SimpleRecord.verify|verify} messages.
         * @param message SimpleRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ISimpleRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SimpleRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SimpleRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.SimpleRecord;

        /**
         * Decodes a SimpleRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SimpleRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.SimpleRecord;

        /**
         * Verifies a SimpleRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a FightRecord. */
    interface IFightRecord {

        /** FightRecord info */
        info?: (Protocol.IFightRoomInfo_Respond|null);

        /** FightRecord time */
        time?: (number|Long|null);

        /** FightRecord seed */
        seed?: (number|null);

        /** FightRecord maxframe */
        maxframe?: (number|null);

        /** FightRecord actions */
        actions?: (Protocol.IAction_Response[]|null);

        /** FightRecord roleId */
        roleId?: (number|Long|null);

        /** FightRecord winId */
        winId?: ((number|Long)[]|null);
    }

    /** Represents a FightRecord. */
    class FightRecord implements IFightRecord {

        /**
         * Constructs a new FightRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IFightRecord);

        /** FightRecord info. */
        public info?: (Protocol.IFightRoomInfo_Respond|null);

        /** FightRecord time. */
        public time: (number|Long);

        /** FightRecord seed. */
        public seed: number;

        /** FightRecord maxframe. */
        public maxframe: number;

        /** FightRecord actions. */
        public actions: Protocol.IAction_Response[];

        /** FightRecord roleId. */
        public roleId: (number|Long);

        /** FightRecord winId. */
        public winId: (number|Long)[];

        /**
         * Creates a new FightRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FightRecord instance
         */
        public static create(properties?: Protocol.IFightRecord): Protocol.FightRecord;

        /**
         * Encodes the specified FightRecord message. Does not implicitly {@link Protocol.FightRecord.verify|verify} messages.
         * @param message FightRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IFightRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FightRecord message, length delimited. Does not implicitly {@link Protocol.FightRecord.verify|verify} messages.
         * @param message FightRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IFightRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FightRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FightRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.FightRecord;

        /**
         * Decodes a FightRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FightRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.FightRecord;

        /**
         * Verifies a FightRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Mail. */
    interface IMail {

        /** Mail header */
        header?: (string|null);

        /** Mail content */
        content?: (string|null);

        /** Mail rewards */
        rewards?: (Protocol.IReward[]|null);

        /** Mail time */
        time?: (number|Long|null);

        /** Mail id */
        id?: (string|null);

        /** Mail hasGet */
        hasGet?: (boolean|null);

        /** Mail hasRead */
        hasRead?: (boolean|null);

        /** Mail type */
        type?: (number|null);
    }

    /** Represents a Mail. */
    class Mail implements IMail {

        /**
         * Constructs a new Mail.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IMail);

        /** Mail header. */
        public header: string;

        /** Mail content. */
        public content: string;

        /** Mail rewards. */
        public rewards: Protocol.IReward[];

        /** Mail time. */
        public time: (number|Long);

        /** Mail id. */
        public id: string;

        /** Mail hasGet. */
        public hasGet: boolean;

        /** Mail hasRead. */
        public hasRead: boolean;

        /** Mail type. */
        public type: number;

        /**
         * Creates a new Mail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mail instance
         */
        public static create(properties?: Protocol.IMail): Protocol.Mail;

        /**
         * Encodes the specified Mail message. Does not implicitly {@link Protocol.Mail.verify|verify} messages.
         * @param message Mail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Mail message, length delimited. Does not implicitly {@link Protocol.Mail.verify|verify} messages.
         * @param message Mail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Mail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Mail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Mail;

        /**
         * Decodes a Mail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Mail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Mail;

        /**
         * Verifies a Mail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Box. */
    interface IBox {

        /** Box id */
        id?: (string|null);

        /** Box time */
        time?: (number|Long|null);

        /** Box index */
        index?: (number|null);

        /** Box state */
        state?: (number|null);
    }

    /** Represents a Box. */
    class Box implements IBox {

        /**
         * Constructs a new Box.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IBox);

        /** Box id. */
        public id: string;

        /** Box time. */
        public time: (number|Long);

        /** Box index. */
        public index: number;

        /** Box state. */
        public state: number;

        /**
         * Creates a new Box instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Box instance
         */
        public static create(properties?: Protocol.IBox): Protocol.Box;

        /**
         * Encodes the specified Box message. Does not implicitly {@link Protocol.Box.verify|verify} messages.
         * @param message Box message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IBox, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Box message, length delimited. Does not implicitly {@link Protocol.Box.verify|verify} messages.
         * @param message Box message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IBox, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Box message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Box
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Box;

        /**
         * Decodes a Box message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Box
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Box;

        /**
         * Verifies a Box message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CupsInfo. */
    interface ICupsInfo {

        /** CupsInfo roleId */
        roleId?: (number|Long|null);

        /** CupsInfo cups */
        cups?: (number|null);
    }

    /** Represents a CupsInfo. */
    class CupsInfo implements ICupsInfo {

        /**
         * Constructs a new CupsInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.ICupsInfo);

        /** CupsInfo roleId. */
        public roleId: (number|Long);

        /** CupsInfo cups. */
        public cups: number;

        /**
         * Creates a new CupsInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CupsInfo instance
         */
        public static create(properties?: Protocol.ICupsInfo): Protocol.CupsInfo;

        /**
         * Encodes the specified CupsInfo message. Does not implicitly {@link Protocol.CupsInfo.verify|verify} messages.
         * @param message CupsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.ICupsInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CupsInfo message, length delimited. Does not implicitly {@link Protocol.CupsInfo.verify|verify} messages.
         * @param message CupsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.ICupsInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CupsInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CupsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.CupsInfo;

        /**
         * Decodes a CupsInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CupsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.CupsInfo;

        /**
         * Verifies a CupsInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a WarGodGettedInfo. */
    interface IWarGodGettedInfo {

        /** WarGodGettedInfo index */
        index?: (number|null);

        /** WarGodGettedInfo gets */
        gets?: (boolean[]|null);
    }

    /** Represents a WarGodGettedInfo. */
    class WarGodGettedInfo implements IWarGodGettedInfo {

        /**
         * Constructs a new WarGodGettedInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IWarGodGettedInfo);

        /** WarGodGettedInfo index. */
        public index: number;

        /** WarGodGettedInfo gets. */
        public gets: boolean[];

        /**
         * Creates a new WarGodGettedInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarGodGettedInfo instance
         */
        public static create(properties?: Protocol.IWarGodGettedInfo): Protocol.WarGodGettedInfo;

        /**
         * Encodes the specified WarGodGettedInfo message. Does not implicitly {@link Protocol.WarGodGettedInfo.verify|verify} messages.
         * @param message WarGodGettedInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IWarGodGettedInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WarGodGettedInfo message, length delimited. Does not implicitly {@link Protocol.WarGodGettedInfo.verify|verify} messages.
         * @param message WarGodGettedInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IWarGodGettedInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WarGodGettedInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarGodGettedInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.WarGodGettedInfo;

        /**
         * Decodes a WarGodGettedInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarGodGettedInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.WarGodGettedInfo;

        /**
         * Verifies a WarGodGettedInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Gift. */
    interface IGift {

        /** Gift type */
        type?: (number|null);

        /** Gift id */
        id?: (number|null);

        /** Gift finishTime */
        finishTime?: (number|Long|null);

        /** Gift infos */
        infos?: (Protocol.IBuyInfo[]|null);
    }

    /** Represents a Gift. */
    class Gift implements IGift {

        /**
         * Constructs a new Gift.
         * @param [properties] Properties to set
         */
        constructor(properties?: Protocol.IGift);

        /** Gift type. */
        public type: number;

        /** Gift id. */
        public id: number;

        /** Gift finishTime. */
        public finishTime: (number|Long);

        /** Gift infos. */
        public infos: Protocol.IBuyInfo[];

        /**
         * Creates a new Gift instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gift instance
         */
        public static create(properties?: Protocol.IGift): Protocol.Gift;

        /**
         * Encodes the specified Gift message. Does not implicitly {@link Protocol.Gift.verify|verify} messages.
         * @param message Gift message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Protocol.IGift, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Gift message, length delimited. Does not implicitly {@link Protocol.Gift.verify|verify} messages.
         * @param message Gift message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Protocol.IGift, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Gift message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Gift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Protocol.Gift;

        /**
         * Decodes a Gift message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Gift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Protocol.Gift;

        /**
         * Verifies a Gift message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** PropertyEnum enum. */
    enum PropertyEnum {
        NONE = 0,
        EXP = 1,
        MONEY = 2,
        DIAMOND = 3,
        CUPS = 4,
        LEVEL = 5,
        TASKSCOPE = 6,
        CLASSLEVEL = 7,
        FAMILYSCOPE = 8,
        GRADE = 9,
        STAR = 10,
        KEY = 11,
        FRESH_TASK_TIME = 12,
        TASKSCOPE_MAX = 13,
        TASKSCOPE_BOX = 14,
        WAR_GOD_CUPS = 15,
        WAR_GOD_CODE = 16,
        FIRST_RECHARGE = 17,
        ROLE_PIC = 18,
        CHANGE_NAME = 19
    }

    /** JobberEnum enum. */
    enum JobberEnum {
        NOMEAN = 0,
        LEADER = 1,
        VICE = 2,
        MEMBER = 3
    }

    /** ErrorEnum enum. */
    enum ErrorEnum {
        INVALID = 0,
        NO_MONEY = 1,
        NO_ITEM = 2,
        NO_SKILL = 3,
        NO_HERO_SKILL = 4,
        NO_HERO = 5,
        NO_BANGGONG = 6,
        NO_DAY_COUNT = 7,
        NO_LIMIT_COUNT = 8,
        NO_LIMIT_DATE = 9,
        FRIEND_MINE_FULL = 100,
        FRIEND_TARGET_FULLL = 101,
        FRIEND_OFFLINE = 102,
        HAS_FAMILY = 203
    }

    /** MessageID enum. */
    enum MessageID {
        INVAILED = 0,
        LOGIN_GAME_REQ = 2,
        LOGIN_GAME_RES = 3,
        HEARBEAT_RES = 101,
        HEARBEAT_REQ = 102,
        BEGIN_MATCH_REQ = 104,
        BEGIN_MATCH_RES = 105,
        FIGHT_ROOM_INFO_RES = 106,
        CANCLE_MATCH_REQ = 107,
        CANCLE_MATCH_RES = 108,
        GM_COMMAND_REQ = 109,
        GM_COMMAND_RES = 110,
        SET_LINEUP_REQ = 111,
        SET_LINEUP_RES = 112,
        SET_FIGHT_LINEUP_REQ = 113,
        SET_FIGHT_LINEUP_RES = 114,
        GET_RANK_RANGE_REQ = 115,
        GET_RANK_RANGE_RES = 116,
        QUIT_WAR_REQ = 117,
        QUIT_WAR_RES = 118,
        TASK_CHANGE_RES = 119,
        FINISH_TASK_REQ = 120,
        REFRESH_TASK_REQ = 121,
        GET_LOGIC_TIME_REQ = 122,
        GET_LOGIC_TIME_RES = 123,
        PROPERTY_CHANGE_RES = 124,
        TASK_SCOPE_BOX_OPEN_REQ = 125,
        REWARD_RES = 126,
        ITEM_CHANGE_RES = 127,
        HERO_LEVEL_UP_REQ = 128,
        HERO_LEVEL_UP_RES = 129,
        ERROR_NOTICE_RES = 130,
        SKILL_LEVEL_UP_REQ = 131,
        SKILL_LEVEL_UP_RES = 132,
        ADD_HERO_RES = 133,
        FRIEND_CHAT_REQ = 134,
        FRIEND_CHAT_RES = 135,
        INVITE_FRIEND_REQ = 136,
        INVITE_FRIEND_RES = 137,
        ACCEPT_FRIEND_REQ = 139,
        ADD_FRIEND_RES = 140,
        ASK_FRIEND_LIST_REQ = 141,
        ASK_FRIEND_LIST_RES = 142,
        ALL_FRIENDS_REQ = 143,
        ALL_FRIENDS_RES = 144,
        ALL_INVITES_REQ = 145,
        ALL_INVITES_RES = 146,
        ALL_CHAT_REQ = 147,
        ALL_CHAT_RES = 148,
        FRIEND_STATE_RES = 149,
        DELETE_INVITE_RES = 150,
        NOTICE_LAST_READ_TIME_REQ = 151,
        DELETE_FRINED_REQ = 152,
        DELETE_FRIEND_RES = 153,
        ASK_FAMILY_REQ = 170,
        ASK_FAMILY_RES = 171,
        JOIN_FAMILY_REQ = 172,
        JOIN_FAMILY_RES = 173,
        JOIN_FAMILY_SUCEED_RES = 190,
        JOIN_FAMILY_APPLYS_REQ = 191,
        JOIN_FAMILY_APPLYS_RES = 192,
        CREATE_FAMILY_REQ = 174,
        CREATE_FAMILY_RES = 175,
        LEAVE_FAMILY_REQ = 176,
        LEAVE_FAMILY_RES = 177,
        ASK_FAMILY_APPLY_REQ = 178,
        ASK_FAMILY_APPLY_RES = 179,
        ACCEPT_FAMILY_APPLY_REQ = 180,
        ACCEPT_FAMILY_APPLY_RES = 196,
        FAMILY_INFO_REQ = 181,
        FAMILY_INFO_RES = 182,
        FAMILY_CHATS_REQ = 185,
        FAMILY_CHATS_RES = 186,
        SEND_FAMILY_CHAT_REQ = 187,
        SEND_FAMILY_CHAT_RES = 188,
        SEARCH_FAMILY_REQ = 189,
        NOTICE_MEMBER_CHANGE_RES = 200,
        SET_FAMILY_JOB_REQ = 201,
        SET_FAMILY_JOB_RES = 202,
        TICK_FAMILY_MEMBER_REQ = 500,
        TICK_FAMILY_MEMBER_RES = 501,
        SET_FAMILY_INFO_REQ = 502,
        SET_FAMILY_INFO_RES = 503,
        BUY_TREASURE_REQ = 203,
        BUY_TREASURE_RES = 204,
        BUY_TREASURE_INFO_REQ = 205,
        BUY_TREASURE_INFO_RES = 206,
        BATTLE_REWARD_RES = 207,
        SIMPLE_RECORD_REQ = 208,
        SIMPLE_RECORD_RES = 209,
        FIGHT_RECORD_REQ = 210,
        FIGHT_RECORD_RES = 211,
        ALL_MAILS_REQ = 230,
        ALL_MAILS_RES = 231,
        NOTICE_MAIL_RES = 232,
        READ_MAIL_REQ = 233,
        READ_MAIL_RES = 234,
        GET_MAIL_REQ = 235,
        GET_MAIL_RES = 236,
        DEL_MAIL_REQ = 237,
        DEL_MAIL_RES = 238,
        FIGHT_MONSTER_REQ = 239,
        FIGHT_MONSTER_RES = 240,
        FIGHT_MONSTER_RESULT_REQ = 241,
        FIGHT_MONSTER_RESULT_RES = 242,
        QUERY_ROLE_LINEUP_REQ = 243,
        QUERY_ROLE_LINEUP_RES = 244,
        ALL_BOX_REQ = 245,
        ALL_BOX_RES = 246,
        SINGLE_BOX_RES = 247,
        OPEN_BOX_REQ = 248,
        OPEN_BOX_RES = 249,
        GET_BOX_REQ = 250,
        GET_BOX_RES = 251,
        DELETE_BOX_RES = 252,
        BOX_REWARD_RES = 253,
        COST_KEY_REQ = 254,
        COST_KEY_RES = 255,
        BUY_KEY_REQ = 256,
        BUY_KEY_RES = 257,
        BUY_TASK_TIME_REQ = 258,
        BUY_TASK_TIME_RES = 259,
        CHANGE_NAME_REQ = 260,
        CHANGE_NAME_RES = 261,
        WAR_GOD_INFO_REQ = 262,
        WAR_GOD_INFO_RES = 263,
        WAR_GOD_REWARD_REQ = 264,
        WAR_GOD_REWARD_RES = 265,
        GET_LOGIN_REWARD_REQ = 266,
        GET_LOGIN_REWARD_RES = 267,
        PASS_DAY_RES = 268,
        ASK_LOGIN_REWARD_GETTED_REQ = 269,
        ASK_LOGIN_REWARD_GETTED_RES = 270,
        GIFT_INFO_RES = 271,
        GIFT_BUY_REQ = 272,
        GIFT_BUY_RES = 273,
        REWARDS_RES = 274,
        GUIDE_REQ = 275,
        GUIDE_RES = 276,
        FINISH_RECHARGE_RES = 277,
        GET_FIRST_RECHARGE_REWARD_REQ = 278,
        TIANTI_REWARD_INFO_RES = 280,
        GET_TIANTI_REWARD_REQ = 290,
        GET_TIANTI_REWARD_RES = 291,
        NOTICE_WAR_EVENT_REQ = 292,
        GET_FAMILY_RANK_REQ = 293,
        GET_FAMILY_RANK_RES = 294,
        KICK_OUT_RES = 295,
        CHANGE_ROLEPIC_REQ = 296,
        CHANGE_ROLEPIC_RES = 297,
        GET_CODE_REWARD_REQ = 298,
        GET_CODE_REWARD_RES = 299,
        GET_SERVER_NOTICE_REQ = 300,
        GET_SERVER_NOTICE_RES = 301,
        LOGIN_FIGHT = 1001,
        LOGIN_FIGHT_RET = 1002,
        CREATE_MATCH_ROOM = 1003,
        FIGHT_2_LOGIC_PACK = 1004,
        F2L_BATTLE_TIME_END = 1005,
        F2L_BATTLE_END = 1006,
        F2L_FIGHT_RECORD = 1007,
        LOGIC_LOGIN_MATCH = 2001,
        LOGIC_LOGIN_MATCH_RET = 2002,
        GO_MATCH = 2003,
        GO_MATCH_RET = 2004,
        L2M_CANCLE_MATCH = 2006,
        M2L_CANCLE_MATCH = 2007,
        M2L_SELECT_ONLINE_ROLE = 2008,
        L2M_SELECT_ONLINE_ROLE = 2009,
        L2M_GET_RANDOM_FRIEND = 2010,
        M2L_GET_RANDOM_FRIEND_RET = 2011,
        L2M_INVITE_FRIEND = 2012,
        M2L_INVITE_FRIEND = 2013,
        L2M_FRIEND_CHAT = 2014,
        M2L_FRIEND_CHAT = 2015,
        L2M_ADD_FRIEND = 2016,
        M2L_ADD_FRIEND = 2017,
        L2M_DELETE_FRIEND = 2018,
        M2L_DELETE_FRIEND = 2019,
        L2M_CREATE_FAMILY = 2020,
        M2L_CREATE_FAMILY_RET = 2021,
        L2M_JOIN_FAMILY = 2022,
        L2M_ASK_FAMILY = 2023,
        M2L_ASK_FAMILY = 2024,
        L2M_ASK_FAMILY_APPLY = 2025,
        M2L_ASK_FAMILY_APPLY = 2026,
        L2M_SELF_FAMILY_INFO = 2027,
        M2L_SELF_FAMILY_INFO = 2028,
        L2M_FAMILY_CHATS = 2029,
        M2L_FAMILY_CHATS = 2030,
        L2M_SEND_FAMILY_CHAT = 2031,
        M2L_SEND_FAMILY_CHAT = 2032,
        M2L_JOIN_FAMILY_SUCEED = 2033,
        L2M_SEARCH_FAMILY = 2034,
        L2M_LEAVE_FAMILY = 2035,
        M2L_LEAVE_FAMILY = 2501,
        L2M_ACCEPT_FAMILY_APPLY = 2036,
        M2L_FAMILY_MEMBER_CHANGE = 2037,
        L2M_SET_FAMILY_JOB = 2038,
        M2L_SET_FAMILY_JOB = 2039,
        L2M_TICK_FAMILY_MEMBER = 2040,
        M2L_TICK_FAMILY_MEMBER = 2041,
        L2M_SET_FAMILY_INFO = 2042,
        M2L_SET_FAMILY_INFO = 2043,
        L2M_FAMILY_RANK = 2044,
        M2L_FAMILY_RANK = 2045,
        L2M_MEMBER_DATA_CHANGE = 2046,
        L2M_GET_FAMILY_RANK = 2047,
        M2L_GET_FAMILY_RANK = 2048,
        FIGHT_LOGIN_MATCH = 3001,
        FIGHT_LOGIN_MATCH_RET = 3002,
        ENTER_ROOM_REQ = 4001,
        ENTER_ROOM_RES = 4002,
        WAR_READY_REQ = 4003,
        WAR_READY_RES = 4004,
        START_WAR_RES = 4005,
        ACTION_REQ = 4006,
        ACTION_RES = 4007,
        SERVER_TIME_REQ = 4008,
        SERVER_TIME_RES = 4009,
        SYN_ROOM_STATE_RES = 4010,
        BATTLE_END_REQ = 4011,
        BATTLE_RET_RES = 4012,
        ACTIONFRAME_REQ = 4013,
        ACTIONFRAME_RES = 4014,
        FIGHT_RECONNECT_REQ = 4015,
        FIGHT_RECONNECT_ROOM_RES = 4016,
        FIGHT_RECONNECT_ACTION_RES = 4017,
        FRAME_RECORD_REQ = 4018,
        FRAME_RECORD_RES = 4019,
        LOGIC_LOGIN_CENTER = 5001,
        LOGIC_LOGIN_CENTER_RET = 5002,
        COMMITE_INFO = 5003,
        NOTICE_CUPS = 5004,
        GET_RANK_INFO = 5005,
        GET_RANK_INFO_BACK = 5006,
        L2C_QUERY_LINEUP = 5007,
        C2L_QUERY_LINEUP = 5008,
        L2C_NAME_EXIST = 5009,
        C2L_NAME_EXIST = 5010,
        L2C_INSERT_NAME = 5011,
        L2C_CHECK_FAMILY_NAME = 5012,
        C2L_CHECK_FAMILY_NAME = 5013,
        L2C_INSERT_FAMILY_NAME = 5014,
        MATCH_LOGIN_CENTER = 6001,
        MATCH_LOGIN_CENTER_RET = 6002,
        SELECT_LINEUP_DATA = 6003,
        SELECT_LINEUP_DATA_RET = 6004,
        CHECK_LOGIN_FIGHT_REQUEST = 7001,
        CHECK_LOGIN_FIGHT_RESPOND = 7002,
        FIGHT_ROOM_INFO_RESPOND = 7003,
        CHCEK_CAL_RESULT_REQUEST = 7004
    }
}
