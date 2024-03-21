import React, { ChangeEvent } from 'react';

type fnHook  = (value: string)=> void;

type InputProps = {
    name: string;
    label: string;
    rows?: number;
    setValue: fnHook;
};


const onChange = (fn: fnHook, event: ChangeEvent<HTMLTextAreaElement>) => {
    if ( fn !== undefined ){
        fn(event.target.value);
    }
}

const TextArea = (props: InputProps) => (
    <div className="col-span-full">
        <label htmlFor={props.name} className="block text-sm font-medium leading-6 text-gray-900">
            {props.label}
        </label>
        <div className="mt-2">
            <textarea
                name={props.name}
                onChange={(e)=>onChange(props.setValue, e)}
                rows={props.rows || 3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
            />
        </div>
    </div>
);

export { TextArea };
