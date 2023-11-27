"use client";
import React, { FC } from "react";
import styled from "styled-components";
import { AvatarCard, SquareLogo } from "./Images";

export const ClippingBorder = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <ClippingBorderOutline>
                <AvatarCard
                    profilePicture="https://dldnews.com/wp-content/uploads/2021/02/Niklas-Zennstro%CC%88m-600x600-1.jpg.webp"
                    firstName="Niklas"
                    lastName="Zennström"
                    job="CEO & Founder - Skype"
                />
                <TextWrapper className="flex flex-col justify-start">
                    <Headline>Current: CEO of Atomico</Headline>
                    <Paragraph>• Secured over $1.1B in funding</Paragraph>
                    <Paragraph className="mb-6">
                        • Invested in over 130 startups
                    </Paragraph>
                    <Paragraph className="mb-4">Notably invested in:</Paragraph>
                    <div className="flex justfy-center items-center">
                        <div className="flex flex-row flex-row gap-3 ">
                            <SquareLogo
                                href={
                                    "https://pbs.twimg.com/profile_images/451612161748373505/Drbv-GNT_400x400.jpeg"
                                }
                            />
                            <SquareLogo
                                href={
                                    "data:image/png;base64,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"
                                }
                            />
                            <SquareLogo
                                href={
                                    "data:image/png;base64,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"
                                }
                            />
                            <SquareLogo
                                href={
                                    "data:image/png;base64,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"
                                }
                            />
                            <SquareLogo
                                href={
                                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEVjW/////9hWf9fV/9xa/9eVv9dVP9WTf9YT/9aUf9XTv9US/9cU/9nX//GxP9TSf/f3v/o5/+hnf/Pzf/39v+Tjv+bl/96c/+lof+Xkv9+eP/KyP/w8P/6+v+5tv9rZP/V0//Cv/+Lhv+uq/9xav+Dff+0sf/i4f/y8f+9uv/s6/+NiP+Ggf+qp//Z1/+fm/+q/ZwLAAAFq0lEQVR4nO2d63bqLBBA4xAChCTeY7zfbW2tvv/bfdray2fVEIPHoWv2On/Ony72ggwwDOh5BEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEHcBwBgPODB/h/njO3/++gW2QNYIEXIYn/ZTneNrJF2Xzc9Pw5CIRVnrotCIDXbvPVrg2HlhOGg1h81lqwaRs5qQqTHafJyqnZCa7vaeFpx5ywh0PH8Kcfui/q0G4nIJUlQqrs11TtSm4914IgkqGDVKuj3IZmxkD+69QYEanWL3geTNnt0+/MAnd7Uf19gj6xRXPT7c8xQd0v6ITcEPS0tiNoQZK28IGZDBnULgogNgQ9sCOI1BGWlBxEbahvfIGbDcGRJEKthMLMliNQQonIrNfyGcmpNEKchjO0J4jQUzT9uCL5FQZSGMvnjhhDaFMRoGDT+uqGwtV7DagixVUGEhkH5xAVyQ2U1kmI01Ib7wu2o3fPHC9/vzHarpPbsjqHRXNHKtDicpR1gjEcq1LqzW9d+HUkhNISOgWCdqd/tZlwJthmdHt+gM+QGgWYgL7UamNK82//ZlegMg7d8w/bV4xbgMmpP8Bqqda7g8GIXfgI8hKyO1TB/sngSBn8HAt2boDSU/VzDmonhHiYWCUbD/N3vi6Hh4VwgTjwHDSuxeaPhzLTyYAxGaWWqH93KMhgtSzfq0c0sgTJKds8EusFnTJCZGFbW2oUii7Mww3z+oFt1r+7pHfMt/ksq8QVKE6rmRxat9cKZsqcfyEm+2jdPmSdcG62GoeabbSpDpyRvOZaZpBCir+765rZ8aXOmlSuSvH2L4T7uTDvakdFaIJqeUE+VExNImYOL4WgcOuAo8oq5r9Ic52Y5Hg5bljGsVBIP/VgV03KKlblEvjAHVWqc7nmeadzdyOIz+fliJAp3N3KT5P51Bj35aIurRCWjzYEG7nxO1CuvOMKtyBflS2iRZ+VYsa3iWda4FUHvSiu+4Q43XhSX7sYN7klj342vF0/ozRiiO7g4heu3crP/BPeneEDxeSnHGfJx6h2KosOsxEL18rE/IiAQm9svse3wd+IBphejG9Mbg+qjG28IKPl62+QxcyULtw+sIWTGN7q/mYSPbngB9l9kPC98JQpducJ1INK9ggWM12uMMMKkSIuM1qmLx+Jcd8yvZbzgX9ecg4mFsSP69OIFQG8Md8lLd+aLE7gwqL/ZkwaPbunNgJ6bGK6iRze0BNWpgWGCKZhCwQEFwmC52kSUzIDFvFrM0eTtky2idRv4ldZOFHFkBvlx05rUf8H77cNBo8AjSBDkGxrVFf8jjvcrW3OQhnMYcIM+xDVKjyS+WTGQSX3KBFOk+XFHtpYqmb/xMTn37yM1PDRtpvLOc7VBlmqNaD78dc+51Z+J8EqBXtXkoawM0art7E3ubeZLedaSC6OXwDBlai7dVX9uZn5VyCj4fOgSDm9EVpdmGY0C5f135+pt/Hp/3l0uPKaE1nzc6SaG+cUWpnyiyXsDw2Gr1SqS6cc0WVh+UeEIpkBzH8MFos/wLoZ1RKvS+xi+odrh38MQV8r7DoaYFqXeXQx9RAsa7x6GTVRx5h6GmFZsB6wbrhBtnN6xbfiCrk7BtmEHV5jxrBvusI1R24YYaxOtGjYRClo13KIs2LdomKAUtGi4wpS6+IE1w1dki7UvLBnWYkyJi/8BYxvvzzZwfoIfgGiXfVcw8VBt6n/D9XhVomK26TtwyRIi3ZnedqEkWQh0K9HzMCV889/OOVLPPHRbiWtAJFQ39/ePvqi9xQ4+IgFcirg92ubF15ckjYV7ekeAq7DqLRuj5tPz6WHF8Lk+WaedUCtn9T4BxpUUEsad3rLdyLIs7c56fgxKSBU4ElqM+Hjrkgd7/tpP5hEEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEOv4DDpRUCKklyhsAAAAASUVORK5CYII="
                                }
                            />
                            <SquareLogo
                                href={
                                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABDQ0P29vbFxcXz8/PW1tb8/PyJiYkgICDo6OhsbGzs7Ozc3NydnZ2zs7NeXl4sLCylpaVOTk67u7vNzc01NTVycnKSkpINDQ14eHiFhYVWVlZISEjp6emtra1kZGQ+Pj4XFxd+fn4jIyMxMTFud2kRAAAEy0lEQVR4nO2caXviIBSFxbrUpXXrNrUdtbb//y9O1ZYLgQBJwJsw5/3UJY+eGw0cziXp9QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArLnjFpCageBWkJqJuOeWkJZ7IcSQW0RKht8FimduFSmZnSoUI24Z6RidCxRP3DrS8XSpUCy4haRiIX7hVpKIsSxQ3HJrScOWKhRTbjEpmCoFijduNSl4UysUA2458RloBYoJt574fOgV5mdP70WRzOzp0ChQzLg1xeXZrDAvezqyFCgO3Kpi8mSrMCd7urAWKMSYW1gsxiUFii23slhsyyrMxZ5OSwsUG25tcXgrrzAPezpwFJiHPZ24KszBnq6dBeZgTz0Fdj/QKJvsia5P++/eCh+4JTbjxltg10N+51TxA7fGZphLe5M5t8hG2Fa+RbrdFV4GVNht5xZSYbcH0/w/w1lAhd1OpF4CKvzLLbIRDwEVcmtsxtxf4JJbY0NW3gp33BIb4jc1XV8gWhoWOt1vXxw9FXbbs53wrJ9eufVFwB3U3HDLu9AsaHANp2tGXSquTLfIx2F/r19bj+UHF+LSwXaz+lPhvR6jVejI5e2stMZZ+QlSJc59Y5JBTK9wW/XNxUQRX2pslo3eImo4UNofc6AEoWX+mzz3/LP6G7xELDAk9jRR5nL7xUUS72q8/J+oBfZ6hxoaKCe0LzHkvwP8uUnsaKDOWVbmAlswTBL99tzkPXKBYamZgbzQLCeoL1+6xiCTwu15LbQNGixfyyVWnotOHKMX6G+TWZFzhmFPyZBW8ROSJG6vxoAuPktPkJQYEvwbpFk2O9xXOTTYrEr+7u4R2/lKUmBY+Gkgl/DaCVrJFw3pbBjEM6Q6tYYEut72Nom1BrB9ogKbDuvKvE5jbK1JKGG3qo4c2oJI9lRKtG5a9BHXkOqEBLwG5F1MifZNi24+EhaoX0vBGCdI/qGOoU/d56hz0mkd1T//Lj/UOouy5AnyuE6Juj0lz1xn5GqW7AQR0jAroNvTRob0Ks3Ghyph0QXVnjYxpPtrtQB2XxWVUaa2bmBIZ9fMx6e747Ifzhdlb/TT5hD+ApvZy6Dr28MAAAD8J4xvyrEcPqx0ND/rjcuOyOXEkEzbwWWCXlNFMXXZuf0W3Zz+HGy831u1G8yXtsg7uO6qLJ5a9DGakb2OvgQOXwC3ZieKd5EgPfM5xqDGny/ESJvIVMBXoFxO/Hxo4UFUS+6K8u0hpQfu/F544WFiKza9eRu4I+NISjV8kUgrdr35AkYSSX2P8FC/BVukvR0pW2smvDHTgmdK+XrwNKmp/UfKBH0NLfYNth4zo6R/eouUrKfvW84cz3gm7Q3djl644pQ+vOckpejYV8DlZvq3qicp7lpTb8VfzFyN4NY4GzeOnQqZYH4VuRXFxpzaO/LlC8Z0oBk9u+WMOYBcoU12VYqP+mrBVB4ZM8Xp9m2HJuYzajJ5No3EyAGyeKqJRu4DjZnJZNjv1GfE3GbDE1om0/cf30FU45abZbugrBA7/jyTUiiTaWdzKQK/W41aEvQmYJDrZE9ssnSkKueWYZZPupYcM7TcOuMMHtDmYZddAmWQ8zADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHzzD27ILlTYXGTTAAAAAElFTkSuQmCC"
                                }
                            />
                        </div>
                    </div>
                </TextWrapper>
            </ClippingBorderOutline>
        </div>
    );
};

const ClippingBorderOutline = styled.div`
    display: flex;
    padding-top: 50px;
    align-items: center;
    flex-direction: column;
    height: 1000px;
    width: 1000px;
    position: absolute;
    border: 5px solid black;
`;
const TextWrapper = styled.div`
    background: rgba(255, 255, 255, 0.36);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    padding: 25px 50px;
    width: 750px;
`;

const Headline = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: black;
`;

const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-left: 24px;
`;
