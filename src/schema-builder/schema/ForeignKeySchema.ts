import {ForeignKeyMetadata} from "../../metadata/ForeignKeyMetadata";

/**
 * Foreign key from the database stored in this class.
 */
export class ForeignKeySchema {

    // -------------------------------------------------------------------------
    // Public Properties
    // -------------------------------------------------------------------------

    /**
     * Name of the table which contains this foreign key.
     */
    name: string;

    /**
     * Column names which included by this foreign key.
     */
    columnNames: string[];

    /**
     * Table referenced in the foreign key.
     */
    referencedTableName: string;

    /**
     * Column names which included by this foreign key.
     */
    referencedColumnNames: string[];

    /**
     * "ON DELETE" of this foreign key, e.g. what action database should perform when
     * referenced stuff is being deleted.
     */
    onDelete?: string;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(name: string,
                columnNames: string[],
                referencedColumnNames: string[],
                referencedTable: string,
                onDelete?: string) {

        this.name = name;
        this.columnNames = columnNames;
        this.referencedColumnNames = referencedColumnNames;
        this.referencedTableName = referencedTable;
        this.onDelete = onDelete;
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    /**
     * Creates a new copy of this foreign key with exactly same properties.
     */
    clone() {
        return new ForeignKeySchema(
            this.name,
            this.columnNames,
            this.referencedColumnNames,
            this.referencedTableName
        );
    }

    // -------------------------------------------------------------------------
    // Static Methods
    // -------------------------------------------------------------------------

    /**
     * Creates a new foreign schema from the given foreign key metadata.
     */
    static create(metadata: ForeignKeyMetadata) {
        return new ForeignKeySchema(
            metadata.name,
            metadata.columnNames,
            metadata.referencedColumnNames,
            metadata.referencedTableName,
            metadata.onDelete
        );
    }

}