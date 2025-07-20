"use client";
import { Button } from "@heroui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { LuShare2 } from "react-icons/lu";
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
type ShareButtonProps = {
  productId: string;
  name: string;
};
const ShareButton = ({ name, productId }: ShareButtonProps) => {
  return (
    <Popover placement='top'>
      <PopoverTrigger>
        <Button size='sm' variant='flat'>
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='flex items-center gap-x-2 justify-center w-full'>
          <TwitterShareButton title={name} url='https://google.com'>
            <TwitterIcon round size={32} />
          </TwitterShareButton>
          <LinkedinShareButton title={name} url='https://google.com'>
            <LinkedinIcon round size={32} />
          </LinkedinShareButton>
          <EmailShareButton title={name} url='https://google.com'>
            <EmailIcon round size={32} />
          </EmailShareButton>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
