import React from "react";
import styles from "./UserBlock.css";
import { EIcons, Icon } from "../../../HOC/Icon";
import { Break } from "../../../HOC/Break";
import { Text } from "../../../HOC/Text";
import { Ecolors } from "../../../../types/Ecolors";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read%20submit%20identity"
      className={styles.userbox}
    >
      <div className={styles.avatarbox}>
        {avatarSrc ? (
          <img className={styles.avatarImage} />
        ) : (
          <Icon name={EIcons.Anon} size={50} />
        )}
      </div>
      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? Ecolors.black : Ecolors.gray99}>
          {username || "Аноним"}
        </Text>
      </div>
    </a>
  );
}
